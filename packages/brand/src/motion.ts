/** Shared motion constants so every site in the ecosystem moves the same way. */

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT_QUART = [0.76, 0, 0.24, 1] as const;

export const DURATION = {
  fast: 0.3,
  base: 0.7,
  slow: 1.1,
} as const;
