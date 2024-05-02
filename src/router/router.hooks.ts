import { useRoute } from 'vue-router';

export function useRouteParamsAsString() {
  const { params } = useRoute();
  const stringParams: { [key: string]: string } = {};

  for (const key in params) {
    if (Array.isArray(params[key])) {
      stringParams[key] = params[key][0];
    } else {
      stringParams[key] = params[key] as string;
    }
  }

  return stringParams;
}
