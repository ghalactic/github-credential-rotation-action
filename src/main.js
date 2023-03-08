import { info, setFailed } from "@actions/core";

try {
  await main();
} catch (e) {
  setFailed(e.stack);
}

async function main() {
  info("It's working.");
}
