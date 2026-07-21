# Quill 🪶

A lightweight, expressive scripting language.

Quill is designed as a fast-to-build, enjoyable scripting language with a clean syntax.  
It serves as a practical learning vehicle and a foundation that will later inform the more systems-oriented [Rune](https://github.com/StormbringerDev/rune-lang) language.

### Implementation Roadmap

| Stage                                  | Status        | Description                            |
| -------------------------------------- | ------------- | -------------------------------------- |
| 1. TypeScript Tree-Walking Interpreter | 🚧 Scaffolded | Fast iteration on syntax & semantics   |
| 2. Rust Bytecode VM                    | 🚧 Scaffolded | Portable, efficient execution          |
| 3. Rust JIT                            | 🚧 Scaffolded | Native performance (Cranelift planned) |

---

## Monorepo Layout

```
quill/
├── apps/
│   ├── quill-cli/          # Rust CLI (REPL + runner) — the main `quill` binary
│   └── quill-repl-ts/      # Pure TypeScript REPL for rapid prototyping
├── crates/                 # Rust workspace
│   ├── quill-core/         # Shared AST, values, errors, opcodes
│   ├── quill-bytecode/     # Bytecode compiler + VM
│   ├── quill-jit/          # JIT backend (future)
│   └── quill-runtime/      # Embedding API + standard library
├── packages/               # TypeScript (pnpm workspace)
│   ├── quill-ast/          # Shared AST types
│   ├── quill-parser/       # Recursive descent / Pratt parser
│   ├── quill-interpreter/  # Tree-walking interpreter (Stage 1)
│   └── quill-types/        # Shared TS utilities
├── examples/               # .quill scripts (golden tests live here)
├── tests/                  # Cross-implementation tests
└── docs/
```

## Quick Start

### Prerequisites

- Node.js 20+ and pnpm 9+
- Rust 1.80+ (stable)
- (Optional) just / make for convenience scripts

```bash
# Clone & enter
git clone https://github.com/StormbringerDev/quill.git
cd quill

# Install JS dependencies
pnpm install

# Build everything
pnpm build

# Run the TypeScript REPL
pnpm --filter quill-repl-ts dev

# Run the Rust CLI (not yet implemented)
cargo run -p quill-cli
```

### Example

```quill
// examples/hello.quill
let name = "world"
print("Hello, " + name + "!")

fn add(a, b) {
  return a + b
}

print(add(40, 2))
```

## Development

```bash
# Run all tests
pnpm test

# Type-check + lint
pnpm check

# Watch mode for TS packages
pnpm dev
```

## Design Goals

- **Lightweight** - small core, easy to embed
- **Expressive** - clean syntax inspired by modern scripting languages
- **Fast iteration** - TypeScript prototype first
- **Performance path** - clear route to bytecode + JIT
- **No macros (for now)** - keep the language simple and the implementation focused

## License

GNU General Public License v3.0
