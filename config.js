//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "24160019857";
global.owner = process.env.OWNER_NUMBER || "24160384437";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "no";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUc1b29wcDhieVpyYldPNXZtekFpdmNueGd3NmdDT0VZcnQ3WWI3NW0zbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWFvM0p5Y0V4YlNHR0R5dm81UkpkbitrRldPMHNTdm94alBNeU1oajZXST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwREc4a05iOTlaWC8xWFlkKzlGeFdMMnBhZ09CWDF5blpOTG9TcHhCRDJrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJldHptWnVqYmMxYjdSaG5paEdlQ1lFZS9kbEZvbWlOODdxbWtGN2VSZjBJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitERFdSUVl0THRYa01FZFdnenBnN1pEWXF5MlpVZFZPNmU5NmREREo3bkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklRcGgzd2tHRFN3L1h4OUFDNzlBbkwyNUlZcjFsdGhWRkFSRk01cEw4SE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME1mRnVUZlk1QkpSVStFdUhreC9la3ViV0t1Ti9ndVY4QUlDTmFMdi8wcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUwwcC9sdnhGUVRiS09pQnlTR0R3MHg1Rjh3WTdpMS9QK1Rld1plbFpoMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlnRjNpb2hKRUM3djAvdml5MGZiMmVUOFpiTE1OckJWcHZPQTJERTJLYXp5eEpkbHdwc2pQc2wyYVdsclpZMis2ZVRnZTB0K2pZL3ZBWHBDL0tmTGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg2LCJhZHZTZWNyZXRLZXkiOiJXeHM1L21lMGtQQzlPNDFwREtxTzFWUUtkRkk0TFNkaVlqVUQ0UjJaRk1NPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI0MTYwMzg0NDM3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjM1NTEzQjU1NjQ2NTlGNjFENkNCMjQzNDdBMTFBOTBEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjU5MDMzMTZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI0MTYwMzg0NDM3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkMyQ0NGQ0E2RjBGN0RCODVGQ0M1NUZDNjdCMTRBQTMyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjU5MDMzMTd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InotM1Jkc3h1UXJXLUZnaUwzWlk2cGciLCJwaG9uZUlkIjoiY2NiNzg3NTMtMWIxYy00OTA2LTg2YTctNDVhMWZmNjI0MDU2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVXSzVBbUtJSlNoalhaSnJoZXBMbWxVdGx3dz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrVXF1cTBUQ3c5SzVpYnlEeG05bjArWk5udVE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQlRHNkZHMk4iLCJtZSI6eyJpZCI6IjI0MTYwMzg0NDM3OjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTW9tbyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSm5mb2V3REVNVGovTFlHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOTRQaExoOWtvcjdJeVUxYktlR3ZEMVhSaHVOZllZT2JvRzBPOVVvQ3FDWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiM05sQ1pUWVgzc0c5dmVhTEFsamRwdXdKZ3dUSitSLzdKWUJhdHVGM2ZzU1NwVkpaNGszWnhLSTRRTk5ncm4zdG1ZdG9LTFc5ZE82cFVycDV2SjRGQlE9PSIsImRldmljZVNpZ25hdHVyZSI6InlhSk1SYjBGTEVNSE94QVdSR1dlZWZIOTRaMGU3WXp3NXhFc3c2U3I1cmlZQ1lPZUxxMVpkNERwbnQxMDF5Ni8yODlvanliM3h1NHVzMzZVVVVqK2pRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjQxNjAzODQ0Mzc6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmZUQ0UzRmWktLK3lNbE5XeW5ocnc5VjBZYmpYMkdEbTZCdER2VktBcWdtIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1OTAzMzEzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU43byJ9
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUc1b29wcDhieVpyYldPNXZtekFpdmNueGd3NmdDT0VZcnQ3WWI3NW0zbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWFvM0p5Y0V4YlNHR0R5dm81UkpkbitrRldPMHNTdm94alBNeU1oajZXST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwREc4a05iOTlaWC8xWFlkKzlGeFdMMnBhZ09CWDF5blpOTG9TcHhCRDJrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJldHptWnVqYmMxYjdSaG5paEdlQ1lFZS9kbEZvbWlOODdxbWtGN2VSZjBJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitERFdSUVl0THRYa01FZFdnenBnN1pEWXF5MlpVZFZPNmU5NmREREo3bkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklRcGgzd2tHRFN3L1h4OUFDNzlBbkwyNUlZcjFsdGhWRkFSRk01cEw4SE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME1mRnVUZlk1QkpSVStFdUhreC9la3ViV0t1Ti9ndVY4QUlDTmFMdi8wcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUwwcC9sdnhGUVRiS09pQnlTR0R3MHg1Rjh3WTdpMS9QK1Rld1plbFpoMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlnRjNpb2hKRUM3djAvdml5MGZiMmVUOFpiTE1OckJWcHZPQTJERTJLYXp5eEpkbHdwc2pQc2wyYVdsclpZMis2ZVRnZTB0K2pZL3ZBWHBDL0tmTGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg2LCJhZHZTZWNyZXRLZXkiOiJXeHM1L21lMGtQQzlPNDFwREtxTzFWUUtkRkk0TFNkaVlqVUQ0UjJaRk1NPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI0MTYwMzg0NDM3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjM1NTEzQjU1NjQ2NTlGNjFENkNCMjQzNDdBMTFBOTBEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjU5MDMzMTZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI0MTYwMzg0NDM3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkMyQ0NGQ0E2RjBGN0RCODVGQ0M1NUZDNjdCMTRBQTMyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjU5MDMzMTd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InotM1Jkc3h1UXJXLUZnaUwzWlk2cGciLCJwaG9uZUlkIjoiY2NiNzg3NTMtMWIxYy00OTA2LTg2YTctNDVhMWZmNjI0MDU2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVXSzVBbUtJSlNoalhaSnJoZXBMbWxVdGx3dz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrVXF1cTBUQ3c5SzVpYnlEeG05bjArWk5udVE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQlRHNkZHMk4iLCJtZSI6eyJpZCI6IjI0MTYwMzg0NDM3OjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTW9tbyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSm5mb2V3REVNVGovTFlHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOTRQaExoOWtvcjdJeVUxYktlR3ZEMVhSaHVOZllZT2JvRzBPOVVvQ3FDWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiM05sQ1pUWVgzc0c5dmVhTEFsamRwdXdKZ3dUSitSLzdKWUJhdHVGM2ZzU1NwVkpaNGszWnhLSTRRTk5ncm4zdG1ZdG9LTFc5ZE82cFVycDV2SjRGQlE9PSIsImRldmljZVNpZ25hdHVyZSI6InlhSk1SYjBGTEVNSE94QVdSR1dlZWZIOTRaMGU3WXp3NXhFc3c2U3I1cmlZQ1lPZUxxMVpkNERwbnQxMDF5Ni8yODlvanliM3h1NHVzMzZVVVVqK2pRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjQxNjAzODQ0Mzc6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmZUQ0UzRmWktLK3lNbE5XeW5ocnc5VjBZYmpYMkdEbTZCdER2VktBcWdtIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1OTAzMzEzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU43byJ9
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || l'éternel inconnu 
    
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
