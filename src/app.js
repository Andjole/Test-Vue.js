window.vueApp = new Vue({
  el: '#example-1',
  data: {
	text: 'Hello World from Vue!'
  },
   methods: {
	changeText : function () {
		vueApp.text = 'Hello World is overrated!'
	}
   }
});
window.vueAppDue = new Vue({
  el: '#example-2',
  data: {
    counter: 0
  },
   methods: {
	count : function () {
	vueAppDue.counter++
	}
   }
});
