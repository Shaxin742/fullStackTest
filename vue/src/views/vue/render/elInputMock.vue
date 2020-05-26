<!--
 * @Author: ShaXin
 * @Date: 2020-05-25 14:20:01
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-05-25 17:51:27
 -->
<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: () => ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
    // clearable: {
    //   type: Boolean,
    //   default: false
    // }
  },

  render: function(createElement) {
    var self = this
    return createElement('input', {
      class: {
        'elInputMock': true
      },
      domProps: {
        value: self.value,
        type: 'text',
        disabled: self.disabled
      },
      on: {
        input: function(event) {
          self.$emit('input', event.target.value)
        }
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.elInputMock{
  height: 40px;
  width: 100%;
  color: #ccc;
  line-height: 40px;
  font-size: 14px;
  padding: 0 15px;
  border-radius: 4px;
  border:1px solid #aaa;
  outline: none;
}
</style>
