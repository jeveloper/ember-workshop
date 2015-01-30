import Ember from 'ember';

export default Ember.Object.extend({
	items: new Set(),
	add: function(product){
		this.get('items').add(product);
	},
	remove: function(product){
		this.get('items').remove(product);
	}
});
