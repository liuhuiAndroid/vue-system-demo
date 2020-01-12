import variables from '@/styles/element-variables.scss'

export default {
  theme: variables.theme,

  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   * 控制面板是否显示
   */
  showSettings: true,

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   * 头部是否固定
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   * 是否展示Logo
   */
  sidebarLogo: true,

  /**
   * @type {string | array} 'production' | ['production','development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production','development']
   * 一般用不到
   */
  errorLog: 'production'
}
