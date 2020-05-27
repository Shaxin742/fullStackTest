export default {
  render(h) {
    return h('h3', {
      'class': {
        btn: true,
        success: this.type === 'success',
        error: this.type === 'error',
        warm: this.type === 'warm',
        default: this.type === 'default'
      },
      domProps: {
        innerHTML: this.$slots.default[0].text
      },
      on: {
        click: this.clickHandle
      }
    })
  },
  methods: {
    clickHandle() {
      // dosomething
    }
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    text: {
      type: String,
      default: 'default'
    }
  }
}
