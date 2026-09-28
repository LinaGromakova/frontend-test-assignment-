import { useMemo } from 'react';

export interface FieldConfig<K extends string = string> {
  config?: {
    name: K;
    pattern: string | RegExp;
  };
  name?: K;
  pattern?: string | RegExp;
  [key: string]: unknown;
}
const useIsValid = (
  config: FieldConfig | readonly FieldConfig[] | null | undefined,
  values: Record<string, unknown> | string,
): boolean => {
  return useMemo(() => {
    if (!config || values === undefined || values === null) return false;
    const configList = (
      Array.isArray(config) ? config : [config]
    ) as readonly FieldConfig[];

    return configList.every((field) => {
      const name = field?.config?.name || field?.name;
      const pattern = field?.config?.pattern || field?.pattern;
      if (!pattern) return false;
      const currentValue =
        typeof values === 'object'
          ? String(values[name ?? ''] ?? '')
          : String(values);

      return new RegExp(pattern).test(currentValue);
    });
  }, [config, typeof values === 'object' && values]);
};

export default useIsValid;
