#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "web3jobsio",
  boardId: "web3jobsio-official",
  domain: "web3jobs.io",
  npmName: "zc-web3jobsio-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
