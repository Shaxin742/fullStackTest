export default {
  name: 'ColumnsRender',
  functional: true,
  props: {
    row: Object,
    render: Function,
    index: Number,
    value: [String, Number],
    column: {
      type: Object,
      default: null
    }
  },
  render: (h, ctx) => {
    const params = {
      row: ctx.props.row,
      text: ctx.props.value,
      index: ctx.props.index
    }
    if (ctx.props.column) params.column = ctx.props.column
    return ctx.props.render(h, params)
  }
}
