import React, { useRef, useEffect, useState } from 'react';

interface TransparentLogoProps {
    src: string;
    alt?: string;
    className?: string;
}

const TransparentLogo: React.FC<TransparentLogoProps> = ({ src, alt, className }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.src = src;
        img.onload = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d', { willReadFrequently: true });
            if (!ctx) return;

            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            for (let i = 0; i < data.length; i += 4) {
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];

                // Target specifically pure white background (255, 255, 255)
                const minColor = Math.min(r, g, b);

                if (minColor === 255) {
                    data[i + 3] = 0; // Pure white becomes transparent
                } else {
                    // Un-premultiply colors to mathematically extract them from a white background
                    // The difference from white represents the opacity of the original graphic
                    const maxDiff = Math.max(255 - r, 255 - g, 255 - b);
                    const alpha = maxDiff;

                    if (alpha > 0) {
                        // Restore original color independent of white background mixing
                        data[i] = Math.max(0, Math.min(255, ((r - 255) * 255) / alpha + 255));
                        data[i + 1] = Math.max(0, Math.min(255, ((g - 255) * 255) / alpha + 255));
                        data[i + 2] = Math.max(0, Math.min(255, ((b - 255) * 255) / alpha + 255));
                        data[i + 3] = alpha;
                    } else {
                        data[i + 3] = 0;
                    }
                }
            }

            ctx.putImageData(imageData, 0, 0);
            setLoaded(true);
        };
    }, [src]);

    return (
        <canvas
            ref={canvasRef}
            className={className}
            style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.3s' }}
            title={alt}
        />
    );
};

export default TransparentLogo;
