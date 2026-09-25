export const LOGIN_CONFIG = [
  {
    label: 'ID Instance',
    config: { type: 'text', name: 'valueIdInstance', pattern: '^\\d{1,12}$' },
  },
  {
    label: 'API Token Instance',
    config: {
      type: 'text',
      name: 'valueApiTokenInstance',
      pattern: '^[a-zA-Z0-9]{50}$',
    },
  },
] as const;