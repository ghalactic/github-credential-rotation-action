import { getInput, group, info, setFailed } from "@actions/core";
import { Octokit } from "@octokit/action";
import { createAppAuth } from "@octokit/auth-app";

try {
  await main();
} catch (e) {
  setFailed(e.stack);
}

async function main() {
  const appId = getInput("appId");
  const appPrivateKey = getInput("appPrivateKey");

  if (!appId || !appPrivateKey) {
    setFailed("App credentials (appId and appPrivateKey) are required");

    return;
  }

  const { request } = new Octokit({
    authStrategy: createAppAuth,
    auth: {
      appId: appId,
      privateKey: appPrivateKey,
    },
  });

  await group("Reading app information", async () => {
    info(await request("/app"));
  });
}
