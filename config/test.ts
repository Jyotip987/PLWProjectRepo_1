const test = {
  name: 'test',
  baseURL: process.env.TEST_BASE_URL ?? '',
  apiBaseURL: process.env.TEST_API_BASE_URL ?? '',
} as const;

export default test;
