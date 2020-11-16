export const map =  {
  created: function() {
    this.hello()
  },
  data() {
    return {
      name: 123123123
    }
  },
  methods: {
    hello: function() {
      console.log('hello from mixin!')
    }
  }
}
