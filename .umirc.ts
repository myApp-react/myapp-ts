import { IConfig } from 'umi-types';
import { resolve } from "path";
import pxToViewPort from 'postcss-px-to-viewport';
import ThemeConfig from './src/themes/theme'
const { Theme } = ThemeConfig
// ref: https://umijs.org/config/
const config: IConfig =  {
  publicPath: '/dist/',
  outputPath: './dist',
  targets: {
    android: 5,
    chrome: 58,
    edge: 13,
    firefox: 45,
    ie: 9,
    ios: 7,
    safari: 10,
  },
  history: 'hash',
  hash: true,
  ignoreMomentLocale: true,
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: {
        hmr: true,
      },
      dynamicImport: {
        loadingComponent: './components/Loader/Loader',
        webpackChunkName: true,
      },
      title: 'myapp',
      dll: true,
      hd: true,
      fastClick: true,
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  theme: Theme,
  disableRedirectHoist: true,
  extraPostCSSPlugins: [
    pxToViewPort({
      viewportWidth: 375,
      // viewportHeight: 667,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
    }),
  ],
  proxy: {
    '/wx': {
      target: 'http://ydhtest.fetower.com',
      changeOrigin: true,
      pathRewrite: {
        '^/wx': '/',
      },
    },
  },
}

export default config;
