import {registerUser} from './genUser';
import {events, startupActions} from './actionData';

const performAction = actions => {
  actions.forEach(action => {
    global.mixpanel.track(action);
    console.log(action);
    //actions.forEach((action) => console.log(action));
  });
};

const randomActions = () => {
  for (let i = 0; i < Math.floor(Math.random() * 5); i++) {
    for (let j = 0; j < Math.floor(Math.random() * 7); j++) {
      const event = events[Math.floor(Math.random() * 7)];
      console.log('events = ', event);
      performAction([event]);
    }
  }
};

export const genRandomData = () => {
  console.log('Registering user');
  registerUser();

  console.log('Startup actions');
  performAction(startupActions);

  console.log('Random actions');
  randomActions();
};
