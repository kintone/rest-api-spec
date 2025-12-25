import path from "node:path";
import { glob } from "glob";
import { $, echo } from "zx";

const __dirname = import.meta.dirname;

const inputs = (
  await glob(path.resolve(__dirname, "..", "kintone/*/openapi.yaml"))
).map((p) => path.relative(path.join(__dirname, ".."), p));

for (const input of inputs) {
  const outputPath = path.join(path.dirname(input), "bundled", "openapi.yaml");
  await $`mkdir -p ${path.dirname(outputPath)}`;
  echo(`${input} -> ${outputPath}`);
  await $`redocly bundle ${input} -o ${outputPath}`;
}
