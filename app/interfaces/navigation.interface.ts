export interface Menu {
  title: Title;
  url: string;
  links: Menu[] | null
}

interface Title {
  es: string;
  en: string;
}