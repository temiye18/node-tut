const os = require("os");

// INFO ABOUT CURRENT USER
const user = os.userInfo();
console.log(user);

// METHOD TO CHECK THE SYSTEM UP TIME IN SECONDS

console.log(`This system has been running for ${String(os.uptime())} seconds`);

const currentOS = {
  name: os.type(),
  platform: os.platform(),
  release: os.release(),
  cpu: os.cpus(),
  memory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOS);
