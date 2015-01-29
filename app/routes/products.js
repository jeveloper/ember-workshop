import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
	model: function() {
		//console.log(" NAME IS %s",this.userSessionService.getname());
		return ajax("api/products").then(function(data){
			return data.products;
		});
	}
});
