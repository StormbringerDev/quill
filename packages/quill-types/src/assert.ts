/** Forces exhaustive switch/case handling */
export function assertNever(x: never, message?: string): never {
  throw new Error(message ?? `Unexpected value: ${JSON.stringify(x)}`);
}

/** Makes a type deeply readonly */
export type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

/** Can mark a string as an identifier */
export type Brand<T, B extends string> = T & { readonly __brand: B };
