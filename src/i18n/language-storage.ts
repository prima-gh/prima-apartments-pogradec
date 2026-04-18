/** Key used in localStorage for the UI language (al | en | de). */
export const LANGUAGE_STORAGE_KEY = "prima-i18n-language";

const SUPPORTED = ["al", "en", "de"] as const;
export type SupportedLanguage = (typeof SUPPORTED)[number];

export function getStoredLanguage(): SupportedLanguage {
  if (typeof window === "undefined") return "al";
  try {
    const raw = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (raw && (SUPPORTED as readonly string[]).includes(raw)) {
      return raw as SupportedLanguage;
    }
  } catch {
    /* private / blocked storage */
  }
  return "al";
}

export function persistLanguage(lng: string): void {
  const code = lng.split("-")[0].toLowerCase();
  if (!(SUPPORTED as readonly string[]).includes(code)) return;
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, code);
  } catch {
    /* ignore */
  }
}
