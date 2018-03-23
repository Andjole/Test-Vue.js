window.vueApp = new Vue({
  el: '#example-1',
  data: {
	text: 'Hello World from Vue!'
  },
   methods: {
		change_text : function () {
			vueApp.text = 'Hello World is overrated!'
		}
   }
});
