// Overloads
// Nico => ["N", "I", "C", "O"]
// Nico <= ["N", "I", "C", "O"]

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split('');
  }
}

const rtaArray = parseStr('Luis');
console.log('rtaArray', rtaArray);

const rtaStr = parseStr(['L', 'u', 'i', 's']);
console.log('rtaStr', rtaStr);
