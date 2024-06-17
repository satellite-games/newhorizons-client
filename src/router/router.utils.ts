import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';

/**
 * Redirects to a route if a condition is met.
 * @param condition The condition to check.
 * @param target The route to redirect to.
 */
export const useConditionalRedirect = (condition: boolean, target: string) => {
  onBeforeMount(() => {
    const { replace } = useRouter();
    if (condition) {
      replace(target);
    }
  });
};
