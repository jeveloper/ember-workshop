import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
	actions: {
		submitForm: function(name, message){
			let foundNames = new Ember.Set();
			foundNames.add({name: name, msg: message});

			
			
		}
	}
});
