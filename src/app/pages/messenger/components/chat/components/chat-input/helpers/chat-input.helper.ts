export const getPreparedInputValue = (rawInput: string | null): string => {
  return (rawInput || '').trim();
};
