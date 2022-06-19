export default {
  projectLink: 'https://github.com/hota1024/use-ripples', // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/hota1024/use-ripples/blob/master', // base URL for the docs repository
  titleSuffix: ' – use-ripples',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © hota1024.`,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <span>use-ripples</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="use-ripples: react hooks for ripple effects" />
      <meta name="og:title" content="use-ripples: react hooks for ripple effects" />
    </>
  ),
}
