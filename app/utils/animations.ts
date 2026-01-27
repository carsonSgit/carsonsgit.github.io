export const SLIDE_UP_ANIMATION = {
  initial: { y: 50, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: {
    type: "spring" as const,
    stiffness: 100,
    damping: 10,
    mass: 1,
  },
} as const;
