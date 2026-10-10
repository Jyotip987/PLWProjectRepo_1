const staging = {
  name: 'staging',
  baseURL: process.env.STAGING_BASE_URL ?? '',
  apiBaseURL: process.env.STAGING_API_BASE_URL ?? '',
} as const;

export default staging;
