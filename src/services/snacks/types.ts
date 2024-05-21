export const SnackType = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info',
} as const;
export type SnackType = (typeof SnackType)[keyof typeof SnackType];

/**
 * A snack is a small notification that appears on the screen.
 */
export interface Snack {
  /**
   * The unique identifier for the snack. Defaults to a random UUID.
   */
  id?: string;
  /**
   * The message to display in the snack.
   */
  message: string;
  /**
   * The type of snack to display.
   */
  type: SnackType;
  /**
   * The duration in milliseconds that the snack should be displayed. Defaults to 5000.
   */
  timeout?: number;
  /**
   * Whether the snack is currently visible. Defaults to true. Mostly used for
   * internal purposes.
   */
  visible?: boolean;
}
