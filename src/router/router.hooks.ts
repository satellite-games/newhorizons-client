import { reactive, watch } from 'vue';
import { useRoute } from 'vue-router';

/**
 * Provides easy access to the route params as an array of strings.
 */
export function useRouteParamsAsStrings() {
  const route = useRoute();
  const stringParams = reactive<{ [key: string]: string }>({});

  const updateParams = () => {
    const { params } = route;
    for (const key in params) {
      if (Array.isArray(params[key])) {
        stringParams[key] = params[key][0];
      } else {
        stringParams[key] = params[key] as string;
      }
    }
  };

  watch(route, updateParams, { immediate: true });

  return stringParams;
}
