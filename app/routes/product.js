import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
	model: function(params){
		return ajax("api/products/"+params.id)
		.then(function(data){
			return data.product;
		});
	}
});
