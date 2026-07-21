#!/usr/bin/env bash
# Quick development helpers
set -euo pipefall

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

case "${1:-}" in
repl)
  pnpm --filter quill-repl-ts dev
  ;;
demo)
  cargo run -p quill-cli -- demo
  ;;
test)
  pnpm test
  cargo test --workspace
  ;;
build)
  pnpm build
  cargo build --workspace
  ;;
*)
  echo "Usage: $0 {repl|demo|test|build}"
  exit 1
  ;;
esac
