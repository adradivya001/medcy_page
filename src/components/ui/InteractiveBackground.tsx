"use client";

import React, { useRef, useState } from "react";

interface InteractiveBackgroundProps {
    children: React.ReactNode;
    className?: string;
    exclusionArea?: {
        width: string;
        height: string;
        top?: string;
        left?: string;
    };
    backgroundColor?: string;
}

export default function InteractiveBackground({
    children,
    className = "",
    exclusionArea,
    backgroundColor = "#CFE8E5"
}: InteractiveBackgroundProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        containerRef.current.style.setProperty('--mouse-x', `${x}px`);
        containerRef.current.style.setProperty('--mouse-y', `${y}px`);
        if (!isHovered) setIsHovered(true);
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                if (containerRef.current) {
                    containerRef.current.style.setProperty('--mouse-x', `-1000px`);
                    containerRef.current.style.setProperty('--mouse-y', `-1000px`);
                }
            }}
            className={`relative overflow-hidden flex flex-col ${className}`}
            style={{
                backgroundColor,
                '--mouse-x': '-1000px',
                '--mouse-y': '-1000px'
            } as any}
        >
            {/* Base Faint Pattern Layer */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.08]"
                style={{
                    backgroundImage: 'url("/lotus_icon_transparent.png")',
                    backgroundSize: '60px 60px',
                    backgroundRepeat: 'repeat',
                    mixBlendMode: 'multiply'
                }}
            />

            {/* Spotlight Reveal Pattern Layer */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: 'url("/lotus_icon_transparent.png")',
                    backgroundSize: '60px 60px',
                    backgroundRepeat: 'repeat',
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.5s ease',
                    WebkitMaskImage: 'radial-gradient(250px circle at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)',
                    maskImage: 'radial-gradient(250px circle at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)',
                }}
            />

            {/* Optional Exclusion Mask */}
            {exclusionArea && (
                <div
                    className="absolute z-[1]"
                    style={{
                        width: exclusionArea.width,
                        height: exclusionArea.height,
                        backgroundColor,
                        left: exclusionArea.left || '50%',
                        top: exclusionArea.top || '45%',
                        transform: 'translate(-50%, -50%)',
                        pointerEvents: 'none'
                    }}
                />
            )}

            <div className="relative z-10 w-full">
                {children}
            </div>
        </section>
    );
}
