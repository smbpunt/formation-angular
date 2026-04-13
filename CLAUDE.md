# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Training repository for learning TypeScript (and later Angular). Despite the repo name `formation-angular`, current content is pure TypeScript fundamentals — no Angular, no `package.json`, no dependencies yet.

## Build / run

- Compile: `tsc --watch` (preferred during lessons). One-shot: `tsc`.
- Run output: `node dist/<file>.js` after compile.
- No test runner, no linter, no formatter configured yet.

## Structure

- `src/` — numbered lesson files: `01_index.ts`, `02_any.ts`, `03_array.ts`, …
- `dist/` — generated output from `tsc` (JS + `.d.ts` + sourcemaps). Should be gitignored; currently committed by oversight — do not add new files here manually.
- `docs/` — course notes (currently minimal).

## Conventions

- Lesson files are numbered sequentially (`NN_topic.ts`). When adding a lesson, use the next number and do **not** renumber existing files.
- `tsconfig.json` is strict: `strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `verbatimModuleSyntax`, `isolatedModules`. Respect these — don't loosen them to make examples compile.
- `module: nodenext` + `verbatimModuleSyntax` means imports must use explicit `.js` extensions and `import type` for type-only imports.
- Target is `esnext`; `jsx: react-jsx` is set but unused so far.
