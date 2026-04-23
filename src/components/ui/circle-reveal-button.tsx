"use client";

import React, { useState, useRef, type MouseEvent } from 'react';

interface CircleRevealButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    bg?: string;
    fg?: string;
    spotColor?: string;
    spotFg?: string;
    radius?: number;
}

export function CircleRevealButton({
    children,
    onClick,
    className = '',
    disabled = false,
    bg = '#111111',
    fg = '#c8ff00',
    spotColor = '#ffffff',
    spotFg = '#000000',
    radius = 200,
}: CircleRevealButtonProps) {
    const [hovered, setHovered] = useState<boolean>(false);
    const [circlePos, setCirclePos] = useState<{ x: number; y: number }>({
        x: 0,
        y: 0,
    });
    const ref = useRef<HTMLButtonElement>(null);

    const handleEnter = (e: MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        setCirclePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setHovered(true);
    };

    const handleLeave = (e: MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        setCirclePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setHovered(false);
    };

    return (
        <button
            ref={ref}
            onClick={onClick}
            disabled={disabled}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className={className}
            style={{
                position: 'relative',
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: disabled ? 'not-allowed' : 'pointer',
                fontFamily: "'Inter', system-ui, sans-serif",
                opacity: disabled ? 0.5 : 1,
                borderRadius: '60px',
            }}
        >
            <span
                style={{
                    display: 'block',
                    position: 'relative',
                    overflow: 'hidden',
                    background: bg,
                    padding: '18px 44px',
                    borderRadius: '60px',
                    isolation: 'isolate',
                }}
            >
                <span
                    style={{
                        position: 'absolute',
                        left: circlePos.x,
                        top: circlePos.y,
                        width: `${radius * 2}px`,
                        height: `${radius * 2}px`,
                        borderRadius: '50%',
                        background: spotColor,
                        transform: hovered
                            ? 'translate(-50%, -50%) scale(1)'
                            : 'translate(-50%, -50%) scale(0)',
                        transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                        zIndex: 0,
                        pointerEvents: 'none',
                    }}
                />
                <span
                    style={{
                        position: 'relative',
                        zIndex: 1,
                        color: hovered ? spotFg : fg,
                        transition: 'color 0.35s ease',
                        fontSize: '16px',
                        fontWeight: 800,
                        letterSpacing: '2px',
                    }}
                >
                    {children}
                </span>
            </span>
        </button>
    );
}

export default CircleRevealButton;
