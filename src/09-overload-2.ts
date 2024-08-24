// Overloads
// Nico => ["N", "I", "C", "O"]
// Nico <= ["N", "I", "C", "O"]

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if (typeof input === 'string') {
    return input.split('');
  } else if (typeof input === 'number') {
    return true;
  }
}

const rtaArray = parseStr('Luis');
rtaArray.reverse();
console.log('rtaArray', rtaArray);

const rtaStr = parseStr(['L', 'u', 'i', 's']);

console.log('rtaStr', rtaStr.toUpperCase());

const rtaInt = parseStr(2);
console.log('rtaInt', rtaInt);
