export function add(...args: number[]) {
  return args.reduce((a, b) => a + b, 0);
}

export function subtract(...args: number[]) {
  return args.reduce((a, b) => a - b, 0);
}

export function multiply(...args: number[]) {
  return args.reduce((a, b) => a * b, 0);
}

export function divide(...args: number[]) {
  return args.reduce((a, b) => a / b, 0);
}
