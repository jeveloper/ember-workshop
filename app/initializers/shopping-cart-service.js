export function initialize(container, application) {
  application.inject('route', 'shoppingCartService', 'service:shopping-cart');
  application.inject('component:product-cart', 'shoppingCartService', 'service:shopping-cart');


}



export default {
  name: 'shopping-cart-service',
  initialize: initialize
};
