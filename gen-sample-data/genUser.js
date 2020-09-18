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
    id: Math.floor(Math.random() * 10000000000).toString(),
    $email: `${Math.random().toString()}@gmail.com`,
    SignupDate: new Date().toTimeString(),
    cred: Math.floor(Math.random() * 10000000000),
  };
};

export const registerUser = () => {
  const user = genUser();
  global.mixpanel.identify(user.id);

  global.mixpanel.identify(user.id);

  global.mixpanel.set({$email: user.email});

  global.mixpanel.setOnce({
    ...user,
  });
  global.user = user;
  return user;
};
