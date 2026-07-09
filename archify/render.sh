#!/usr/bin/env bash
# Re-render every archify JSON IR in src/ into out/ (HTML).
# Requires the archify skill repo checked out; set ARCHIFY_DIR or rely on the default below.
set -euo pipefail

ARCHIFY_DIR="${ARCHIFY_DIR:-/var/folders/9_/zntfqy694sggvhxdrp7sqx5c0000gn/T/pi-gh-fgtl8V/archify/archify}"
HERE="$(cd "$(dirname "$0")" && pwd)"
SRC="$HERE/src"
OUT="$HERE/out"
mkdir -p "$OUT"

for f in "$SRC"/*.json; do
  base="$(basename "$f" .json)"
  type="${base##*.}"
  name="${base%.*}"
  node "$ARCHIFY_DIR/bin/archify.mjs" render "$type" "$f" "$OUT/$name.html"
  node "$ARCHIFY_DIR/bin/archify.mjs" check   "$OUT/$name.html" >/dev/null && echo "  ok: $name ($type)"
done
echo "Rendered $(ls "$OUT"/*.html | wc -l | tr -d ' ') diagrams into $OUT"
