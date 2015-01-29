export function initialize(container, application) {
  application.inject('route', 'userSessionService', 'service:user-session');
  //this describes where this service gets injected to
}

export default {
  name: 'user-session-service',
  initialize: initialize
};
