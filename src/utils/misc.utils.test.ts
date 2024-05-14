import { describe, test, expect } from 'vitest';
import { loadResource } from './misc.utils';
import { ref } from 'vue';
import { sleep } from '@spuxx/browser-utils';

describe('loadResource', () => {
  test('should successfully load the resource', async () => {
    const resourceRef = ref<Resource<string>>(null);
    const loader = async () => {
      return 'success!';
    };

    loadResource(resourceRef, loader);
    expect(resourceRef.value).toBe('pending');
    await sleep(0); // Flush promises
    expect(resourceRef.value).toBe('success!');
  });

  test('should fail to load the resource and return an error', async () => {
    const resourceRef = ref<Resource<string>>(null);
    const loader = async () => {
      throw new Error('Oh no!');
    };
    await expect(() => loadResource(resourceRef, loader)).rejects.toThrowError('Oh no!');
    expect(resourceRef.value).toBe('failed');
  });
});
