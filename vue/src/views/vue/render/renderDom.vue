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
      return h(
        'span',
        {
          style: { fontSize: '8px' },
          on: {
            click: () => {
              this.change('shshshs')
            }
          }
        },
        content
      )
    },
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
      default:
        return ''
    }
  }
}
</script>

<style>
</style>
