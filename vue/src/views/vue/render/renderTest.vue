<!--
 * @Author: ShaXin
 * @Date: 2020-05-25 16:16:40
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-05-26 13:20:05
 -->
<script>
export default {
  props: {
    value: {
      type: String,
      default: () => '默认值'
    }
  },
  mounted() {
    console.log('renderTest组件mounted')
    this.$nextTick(() => {
      console.log(this.$refs.sshhs)
    })
  },
  methods: {
    test() {
      console.log('12313132')
      console.log(this.$refs.sshhs)
    }
  },
  render(createElement) {
    var self = this
    console.log(self.value)
    return createElement('div', {
      ref: 'sshhs',
      on: {
        click: function(event) {
          self.test(event)
        }
      }
    }, [
      createElement('h1', self.value),
      createElement('p', self.value)
    ])
  }
}
</script>
