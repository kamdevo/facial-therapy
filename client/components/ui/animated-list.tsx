import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export type AnimatedListItem = React.ReactNode;

interface AnimatedListProps {
  items: AnimatedListItem[];
  /** Time in seconds to scroll the whole list once */
  duration?: number;
  /** Gap between items */
  gap?: number;
  /** Pause on hover */
  pauseOnHover?: boolean;
  className?: string;
}

/**
 * Animated vertical ticker list (MagicUI-inspired) that loops seamlessly.
 * Duplicates the items and animates translateY for an infinite marquee effect.
 */
export function AnimatedList({
  items,
  duration = 18,
  gap = 16,
  pauseOnHover = true,
  className = '',
}: AnimatedListProps) {
  const shouldReduce = useReducedMotion();
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const [isHover, setIsHover] = React.useState(false);

  const anim = shouldReduce
    ? {}
    : {
        y: [0, -50, 0],
        transition: {
          duration,
          times: [0, 1],
          ease: 'linear',
          repeat: Infinity,
        },
      } as const;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => pauseOnHover && setIsHover(true)}
      onMouseLeave={() => pauseOnHover && setIsHover(false)}
    >
      <motion.div
        ref={contentRef}
        style={{ display: 'grid', rowGap: gap, gridAutoRows: 'minmax(0,auto)' }}
        animate={isHover ? undefined : anim}
        className="will-change-transform"
      >
        {[...items, ...items].map((child, idx) => (
          <div key={idx} className="min-h-[72px]">
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
