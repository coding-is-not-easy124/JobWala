// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://eef201079a13f731358095f8e9496550@o4510149583699968.ingest.us.sentry.io/4510149589860352",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
  integrations: [
    nodeProfilingIntegration(),
    Sentry.mongooseIntegration()
  ],
});