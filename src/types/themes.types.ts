interface Theme {
  text: string
  background: string
}

interface ThemeList {
  [key: string]: Theme
}

export type { Theme, ThemeList }
