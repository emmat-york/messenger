export const getTrimmedString = (
  rawInput: string | null | undefined,
): string => {
  return (rawInput || '').trim();
};
