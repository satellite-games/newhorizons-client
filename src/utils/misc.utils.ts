import type { Ref } from 'vue';

/**
 * A generic function that loads a resource asynchronously.
 * @param resourceRef The `ref` that will hold the resource.
 * @param resourcePromise The promise that resolves to the resource.
 */
export async function loadResource(resourceRef: Ref<Resource>, loader: () => Promise<unknown>) {
  resourceRef.value = 'pending';
  try {
    resourceRef.value = await loader();
  } catch (error) {
    resourceRef.value = 'failed';
    throw error;
  }
}
