export const imports = {
  'src/components/Button/readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-button-readme" */ 'src/components/Button/readme.mdx'),
}
