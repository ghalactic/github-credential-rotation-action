import { getInput, info, setFailed, setOutput } from "@actions/core";

try {
  await main();
} catch (e) {
  setFailed(e.stack);
}

async function main() {
  setOutput("REPLACE_ME", getInput("REPLACE_ME"));
  info("It's working.");
}
