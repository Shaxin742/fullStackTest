<!---<template>
  <span>
    <svg-icon v-if="icon" icon-class="{icon}" />
    <span v-if="title" slot="title">{{ $t(title) }}</span>
  </span>
</template>--->

<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const { icon, title } = context.props
    const vnodes = []

    if (icon) {
      vnodes.push(<svg-icon class='icon' icon-class={icon}/>)
    }

    if (title) {
      vnodes.push(<span slot='title'>{(title)}</span>)
    }
    return vnodes
  }
}
</script>
<style lang="scss" scoped>
.icon{
  margin: 0 16px;
}
</style>
