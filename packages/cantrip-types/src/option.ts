export type Option<T> =
  { readonly kind: "some"; readonly value: T } | { readonly kind: "none" };

export const Some = <T>(value: T): Option<T> => ({ kind: "some", value });
export const None: Option<never> = { kind: "none" };

// Helper functions
export function isSome<T>(option: Option<T>): boolean {
  return option.kind === "some";
}
export function isNone<T>(option: Option<T>): boolean {
  return option.kind === "none";
}
export function unwrap<T>(option: Option<T>): T {
  if (isSome(option)) {
    return option.value;
  } else {
    throw new Error("Unexpected None");
  }
}
