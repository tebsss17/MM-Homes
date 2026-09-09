'use client';

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CountUpProps {
    end: number;
    duration?: number;
    suffix?: string;
}

export default function CountUp({ end, duration = 2, suffix = '' }: CountUpProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number | null = null;

        const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
        // Smooth counting calculation
         setCount(Math.floor(progress * end));

        if (progress < 1) {
        requestAnimationFrame(step);
        }
    };

        requestAnimationFrame(step);
    }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}