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
  const appInstallationId = getInput("appInstallationId");
  const appPrivateKey = getInput("appPrivateKey");

  if (!appId || !appInstallationId || !appPrivateKey) {
    setFailed(
      "App credentials " +
        "(appId, appInstallationId, and appPrivateKey)" +
        " are required"
    );

    return;
  }

  const { request } = new Octokit({
    authStrategy: createAppAuth,
    auth: {
      appId: appId,
      privateKey: appPrivateKey,
      installationId: appInstallationId,
    },
  });

  await group("Reading app information", async () => {
    info(JSON.stringify(await request("/app"), null, 2));
  });
}
