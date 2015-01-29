import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		add: function(){
			this.sendAction('add', this.get('model'));
		}
	},
	'in-cart': false
});
