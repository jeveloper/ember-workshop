import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		add: function(){
			//this.sendAction('add', this.get('model'));
			
			this.shoppingCartService.add(this.get('model'));
			console.log(this.shoppingCartService.items);
		}
	},
	'in-cart': false
});
