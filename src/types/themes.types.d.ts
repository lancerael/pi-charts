interface Theme {
  text: string
  background: string
}
interface ThemeList {
  [key: string]: Theme
}
export { Theme, ThemeList }
