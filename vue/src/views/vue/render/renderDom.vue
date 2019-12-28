<script>
export default {
  name: 'RenderDom',
  props: {
    change: {
      type: Function,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    config: {
      type: Object,
      required: true
    }
  },
  methods: {
    createSpan(h) {
      const { content } = this.config
      return h('span', {
        style: { fontSize: '8px' },
        props: {
          content: content
        }
      },
      [111, h('p', { on: {
        click: () => {
          this.change('shshshs')
        }
      }}, 'createSpan')]
      )
    },
    createTooltip(h) {
      const { content } = this.config
      return h('el-tooltip', {
        style: { fontSize: '8px' },
        props: {
          content: content
        }
      },
      [h('p', { on: {
        click: () => {
          this.change('shshshs')
        }
      }}, 'createTooltip')]
      )
    },
    // render(createElement) {
    //   return createElement('div',
    //     Array.apply(null, { length: 20 }).map(function() {
    //       return createElement('p', 'hi')
    //     })
    //   )
    // }
    createTimePicker(h) {
      const { type, pickerOptions, format } = this.config
      return h(
        'el-date-picker',
        {
          props: {
            value: this.config.value,
            type: type || 'date',
            'picker-options': pickerOptions,
            format: format
          },
          on: {
            input: (val) => {
              this.config.value = val
              this.change(val)
            }
          },
          change: (val) => {
            console.log(val, '123123')
          }
        }
      )
    },
    createSelect(h) {
      let ops = []
      const { options, clearable, multiple, collapseTags } = this.config
      ops = options.map((option) => {
        return h('el-option', {
          key: option['label'],
          props: {
            label: option.label,
            value: option.value,
            disabled: option.disabled
          }
        })
      })
      return h(
        'el-select',
        {
          props: {
            value: this.config.value,
            clearable: clearable,
            multiple: multiple,
            'collapse-tags': collapseTags
          },
          on: {
            change: (val) => {
              console.log(val)
              this.config.value = val
              this.change(val)
            }
          }
        },
        ops
      )
    }
  },
  render(h) {
    switch (this.type) {
      case 'span':
        return this.createSpan(h)
      case 'select':
        return this.createSelect(h)
      case 'timePicker':
        return this.createTimePicker(h)
      case 'tooltip':
        return this.createTooltip(h)
      default:
        return ''
    }
  }
}
</script>

<style>
</style>
