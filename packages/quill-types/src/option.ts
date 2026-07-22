export type Option<T> =
  { readonly kind: "some"; readonly value: T } | { readonly kind: "none" };

export const Some = <T>(value: T): Option<T> => ({ kind: "some", value });
export const None: Option<never> = { kind: "none" };
