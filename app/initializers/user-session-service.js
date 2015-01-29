export function initialize(container, application) {
  application.inject('route', 'userSessionService', 'service:user-session');
}

export default {
  name: 'user-session-service',
  initialize: initialize
};
