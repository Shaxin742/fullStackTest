<!--
 * @Author: ShaXin
 * @Date: 2020-05-25 14:05:01
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-05-25 14:12:11
 -->
<script>
export default {
  props: {
    arr: {
      type: Array,
      required: true
    }
  },
  render(createElement) {
    if (this.arr.length) {
      return createElement('ul', this.arr.map(function(item) {
        return createElement('li', item.name)
      }))
    } else {
      return createElement('p', 'No items found.')
    }
  }
}
</script>
