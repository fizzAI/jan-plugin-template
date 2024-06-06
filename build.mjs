import * as esbuild from "esbuild";

await esbuild.build({
    entryPoints: ["src/main.ts"],
    bundle: true,
    outfile: "dist/index.js",
    target: "esnext",
    format: "esm"
});
