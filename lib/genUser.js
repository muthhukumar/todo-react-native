const users = [
  '2134125613451',
  '1425613451',
  '14253451',
  '51251634623463453',
  '1512345123524651345',
  '1613461346',
  '16413613',
  '13461376134671',
  '1734671347134713',
  '134134761',
];

const genUser = () => {
  return {
    id: users[Math.floor(Math.random() * 10)],
    $email: `${Math.random().toString()}@gmail.com`,
    SignupDate: new Date().toTimeString(),
    cred: Math.floor(Math.random() * 10000000000),
  };
};

export const registerUser = () => {
  const user = genUser();
  mixpanel.identify(user.id);

  mixpanel.set({$email: user.email});

  mixpanel.setOnce({
    ...user,
  });

  mixpanel.setGroup('company', 'mixpanel');

  global.user = {id: user.id, email: user.$email};
  return [user, mixpanel];
};
