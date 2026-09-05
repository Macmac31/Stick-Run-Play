// Add this BEFORE Ruffle loads your SWF on your Netlify page.
// Replace "your-app-name.onrender.com" with your actual Render URL once deployed.

window.RufflePlayer = window.RufflePlayer || {};

const RENDER_HOST = "https://serverside-h37f.onrender.com";

window.RufflePlayer.config = {
  socketProxy: [
  { host: "195.201.166.251", port: 443, proxyUrl: `wss://${RENDER_HOST}/?token=server1` },
  { host: "195.201.166.251", port: 80, proxyUrl: `wss://${RENDER_HOST}/?token=server2` },
  { host: "195.201.166.251", port: 53, proxyUrl: `wss://${RENDER_HOST}/?token=server3` },
  { host: "195.201.166.251", port: 911, proxyUrl: `wss://${RENDER_HOST}/?token=server4` },
  { host: "195.201.166.251", port: 1200, proxyUrl: `wss://${RENDER_HOST}/?token=server5` },
  { host: "195.201.166.251", port: 4505, proxyUrl: `wss://${RENDER_HOST}/?token=server6` },
  { host: "195.201.166.251", port: 8184, proxyUrl: `wss://${RENDER_HOST}/?token=server7` },
  { host: "195.201.166.251", port: 27000, proxyUrl: `wss://${RENDER_HOST}/?token=server8` },
  { host: "138.201.55.135", port: 443, proxyUrl: `wss://${RENDER_HOST}/?token=server9` },
  { host: "138.201.55.135", port: 80, proxyUrl: `wss://${RENDER_HOST}/?token=server10` },
  { host: "138.201.55.135", port: 53, proxyUrl: `wss://${RENDER_HOST}/?token=server11` },
  { host: "138.201.55.135", port: 911, proxyUrl: `wss://${RENDER_HOST}/?token=server12` },
  { host: "138.201.55.135", port: 1200, proxyUrl: `wss://${RENDER_HOST}/?token=server13` },
  { host: "138.201.55.135", port: 4505, proxyUrl: `wss://${RENDER_HOST}/?token=server14` },
  { host: "138.201.55.135", port: 8184, proxyUrl: `wss://${RENDER_HOST}/?token=server15` },
  { host: "138.201.55.135", port: 27000, proxyUrl: `wss://${RENDER_HOST}/?token=server16` },
  { host: "188.40.137.176", port: 443, proxyUrl: `wss://${RENDER_HOST}/?token=server17` },
  { host: "188.40.137.176", port: 80, proxyUrl: `wss://${RENDER_HOST}/?token=server18` },
  { host: "188.40.137.176", port: 53, proxyUrl: `wss://${RENDER_HOST}/?token=server19` },
  { host: "188.40.137.176", port: 911, proxyUrl: `wss://${RENDER_HOST}/?token=server20` },
  { host: "188.40.137.176", port: 1200, proxyUrl: `wss://${RENDER_HOST}/?token=server21` },
  { host: "188.40.137.176", port: 4505, proxyUrl: `wss://${RENDER_HOST}/?token=server22` },
  { host: "188.40.137.176", port: 8184, proxyUrl: `wss://${RENDER_HOST}/?token=server23` },
  { host: "188.40.137.176", port: 27000, proxyUrl: `wss://${RENDER_HOST}/?token=server24` },
  { host: "4.150.223.111", port: 443, proxyUrl: `wss://${RENDER_HOST}/?token=server25` },
  { host: "4.150.223.111", port: 80, proxyUrl: `wss://${RENDER_HOST}/?token=server26` },
  { host: "4.150.223.111", port: 53, proxyUrl: `wss://${RENDER_HOST}/?token=server27` },
  { host: "4.150.223.111", port: 911, proxyUrl: `wss://${RENDER_HOST}/?token=server28` },
  { host: "4.150.223.111", port: 1200, proxyUrl: `wss://${RENDER_HOST}/?token=server29` },
  { host: "4.150.223.111", port: 4505, proxyUrl: `wss://${RENDER_HOST}/?token=server30` },
  { host: "4.150.223.111", port: 8184, proxyUrl: `wss://${RENDER_HOST}/?token=server31` },
  { host: "4.150.223.111", port: 27000, proxyUrl: `wss://${RENDER_HOST}/?token=server32` },
  { host: "185.117.132.1", port: 443, proxyUrl: `wss://${RENDER_HOST}/?token=server33` },
  { host: "185.117.132.1", port: 80, proxyUrl: `wss://${RENDER_HOST}/?token=server34` },
  { host: "185.117.132.1", port: 53, proxyUrl: `wss://${RENDER_HOST}/?token=server35` },
  { host: "185.117.132.1", port: 911, proxyUrl: `wss://${RENDER_HOST}/?token=server36` },
  { host: "185.117.132.1", port: 1200, proxyUrl: `wss://${RENDER_HOST}/?token=server37` },
  { host: "185.117.132.1", port: 4505, proxyUrl: `wss://${RENDER_HOST}/?token=server38` },
  { host: "185.117.132.1", port: 8184, proxyUrl: `wss://${RENDER_HOST}/?token=server39` },
  { host: "185.117.132.1", port: 27000, proxyUrl: `wss://${RENDER_HOST}/?token=server40` }
  ]
};
