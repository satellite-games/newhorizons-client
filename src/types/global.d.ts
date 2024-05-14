export {};

declare global {
  /**
   * Unwraps the type of the properties of a Vuetify component.
   */
  export type VProps<TComponent> = InstanceType<TComponent>['$props'];
  /**
   * A resource is a value that is loaded asynchronously.
   * - null: The initial value of the ref.
   * - `pending`: Indicates that the value is currently being loaded.
   * - `failed`: Indicates that the value failed to load.
   * - T: The type of the value that was loaded.
   */
  export type Resource<T = unknown> = T | null | 'pending' | 'failed';
  /**
   * A color is a string that represents a color in the Vuetify theme.
   */
  export type Color = 'accent' | 'accent-2' | 'primary' | 'secondary';
}
