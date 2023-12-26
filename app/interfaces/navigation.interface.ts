export interface Menu {
  links: Links[] | [];
  error?: string
}

export interface Links {
  title: Title;
  url: string;
  links?: Links[] | null
}

interface Title {
  es: string;
  en: string;
}