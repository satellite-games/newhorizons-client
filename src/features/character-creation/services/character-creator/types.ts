/**
 * The possible progress statuses of the character creation process.
 */
export const CharacterCreationProgress = {
  /**
   * Indicates that the character creation process has not yet been started.
   */
  initial: 0,
  /**
   * Indicates that the character creation process has been started, but the user
   * has not yet selected an origin.
   */
  presetSelected: 5,
  /**
   * Indicates that the user has selected an origin.
   */
  originSelected: 10,
} as const;
export type CharacterCreationProgress =
  (typeof CharacterCreationProgress)[keyof typeof CharacterCreationProgress];
