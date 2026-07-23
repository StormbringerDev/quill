import type { Span } from "./location.js";

export interface Diagnostic {
  readonly message: string;
  readonly span?: Span;
  readonly severity: "error" | "warning" | "info" | "hint";
  readonly code?: string; // e.g. "E0001"
}
