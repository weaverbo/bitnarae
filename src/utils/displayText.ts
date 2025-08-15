export const getDisplayText = (title: string, subtitle?: string | null) => {
  return [title, subtitle].filter(Boolean).join(" ");
};
