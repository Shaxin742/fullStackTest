export const test =  {
  created: function() {
    console.log('tes')
    this.hello&&this.hello()
  },
  data() {
    return {
      name: 123123123
    }
  },
  methods: {
    // hello: function() {
    //   console.log('hello from mixin!')
    // }
  }
}
