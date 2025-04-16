#!/usr/bin/env zx
import { echo } from "zx";
import { glob } from "glob";
import path from "node:path";

const inputs = (
  await glob(path.resolve(__dirname, "..", "kintone/*/openapi.yaml"))
).map((p) => path.relative(path.join(__dirname, ".."), p));

for (const input of inputs) {
  const outputPath = path.join(path.dirname(input), "bundled", "openapi.yaml");
  await $`mkdir -p ${path.dirname(outputPath)}`;
  echo(`${input} -> ${outputPath}`);
  await $`redocly bundle ${input} -o ${outputPath}`;
}
