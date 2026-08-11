const { spawnSync } = require("node:child_process");

const command = process.argv[2] || "dev";
const nextBin = require.resolve("next/dist/bin/next");
const result = spawnSync(process.execPath, [nextBin, command, ...process.argv.slice(3)], {
  stdio: "inherit"
});

process.exit(result.status ?? 1);
