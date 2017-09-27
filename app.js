/* 1. Basic example */
/* To create a Vue instance, pass an object to the constructor like so. The
    "data" object represents the instance's internal state. The 'el' property
    tells Vue which element on the page it should take over (or mount to). */
var app = new Vue({
  el: '#app1',
  data: {
    message: 'Hello World!'
  }
})

/* Properties on the data object can be treated as if they were defined
    directly on the parent. When data changes in the app, any necessary updates
    to the DOM which it controls happen instantly and automatically. There
    is *no* need to do direct DOM manipulation here. */
app.message = 'Here is an updated message.'

/* 2. Simple Counter app */
/* This example shows how a Vue instance's internal state can be updated in
    response to various events. Because of Vue's reactive nature, as soon as
    any internal data is updated, any elements that depend on that data update
    automatically - handling events becomes much simpler. */

/* In addition to data, a Vue instance can have methods - these are just
    functions attached to the object. Any property in the objects' data
    can be accessed with 'this' + the property name. */
var counter = new Vue({
  el: '#app2',
  data: {
    count: 0
  },
  methods: {
    increment: function () {
      this.count ++
    },
    decrement: function () {
      this.count --
    }
  }
})

/* 3. User input and computed properties */
/* In addition to methods, Vue instances support computed properties. These
    properties are automatically derived from some other source (often something
    in the instance's state), and any arbitrary transformation can be applied.
    As soon as the source data changes, the computed property changes as well. */

/* The template for this instance contains a special directive, 'v-model', which
    is defined on an <input> element. This means that the value of the input element
    is tied to the relevant property of this instance (in this case, 'message').
    v-model and related tools make handling user input very easy in Vue. */
var reverser = new Vue({
  el: '#app3',
  data: {
    message: ''
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
})

