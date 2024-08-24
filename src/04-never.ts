// Never is used for something is executing forever

const withoutEnd = () => {
  while (true) {
    console.log('Nunca para de aprender');
  }
};

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'Is an string type';
  } else if (Array.isArray(input)) {
    return 'Is an array';
  }

  return fail('Not match');
};

console.log('example func () => ', example('hola'));
console.log('example func () => ', example([]));
console.log('example func () => ', example(1221));
console.log('example func () => ', example('1'));
