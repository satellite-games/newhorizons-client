import { afterEach, expect, it } from 'vitest';
import { Snacks } from './snacks.service';
import { sleep } from '@spuxx/browser-utils';

afterEach(() => {
  Snacks.destroy();
});

it('should correct snacks to the list of snacks', () => {
  Snacks.add({ message: 'info', type: 'info' });
  expect(Snacks.snacks).toHaveLength(1);
  expect(Snacks.snacks[0].message).toBe('info');
  expect(Snacks.snacks[0].type).toBe('info');
  Snacks.add({ message: 'success', type: 'success' });
  expect(Snacks.snacks).toHaveLength(2);
  expect(Snacks.snacks[1].message).toBe('success');
  expect(Snacks.snacks[1].type).toBe('success');
  Snacks.add({ message: 'warning', type: 'warning' });
  expect(Snacks.snacks).toHaveLength(3);
  expect(Snacks.snacks[2].message).toBe('warning');
  expect(Snacks.snacks[2].type).toBe('warning');
  Snacks.add({ message: 'error', type: 'error' });
  expect(Snacks.snacks).toHaveLength(4);
  expect(Snacks.snacks[3].message).toBe('error');
  expect(Snacks.snacks[3].type).toBe('error');
});

it('should remove the snack automatically after the timeout', async () => {
  Snacks.add({ message: 'info', type: 'info', timeout: 100 });
  expect(Snacks.snacks).toHaveLength(1);
  await sleep(100);
  expect(Snacks.snacks).toHaveLength(0);
});
