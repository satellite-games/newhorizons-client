/**
 * The possible progress statuses of the character creation process.
 */
export const CharacterCreationProgress = {
  /**
   * Indicates that the character creation process has not yet been started.
   */
  initial: 'initial',
  /**
   * Indicates that the character creation process has been started, but the user
   * has not yet selected an origin.
   */
  preOriginSelection: 'pre-origin',
  /**
   * Indicates that the user has selected an origin.
   */
  postOriginSelection: 'post-origin',
} as const;
export type CharacterCreationProgress =
  (typeof CharacterCreationProgress)[keyof typeof CharacterCreationProgress];
