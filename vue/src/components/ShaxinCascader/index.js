import Cascader from './src/cascader'
/* istanbul ignore next */
// Cascader.install = function(Vue) {
//   Vue.component(Cascader.name, Cascader)
// }
const ShaxinCascader = {
  install : function(Vue) {
      Vue.component(Cascader.name, Cascader)
    }
}

export default ShaxinCascader
