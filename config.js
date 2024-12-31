const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_41_12_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTk2LFxuICAgICAgICA3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUyLFxuICAgICAgICA0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjksXG4gICAgICAgIDk5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4LFxuICAgICAgICA4MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI2LFxuICAgICAgICA5LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU5LFxuICAgICAgICA5LFxuICAgICAgICA4MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDk1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNixcbiAgICAgICAgMTczLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAzNixcbiAgICAgICAgMTM3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE4LFxuICAgICAgICA5NSxcbiAgICAgICAgODQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODYsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDg2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTU0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjEyLFxuICAgICAgICA4NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU2LFxuICAgICAgICA5MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExMixcbiAgICAgICAgNDQsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAwLFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDY5LFxuICAgICAgICA4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMixcbiAgICAgICAgMTM1LFxuICAgICAgICA4MixcbiAgICAgICAgMjU0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMyxcbiAgICAgICAgODMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE1LFxuICAgICAgICA0LFxuICAgICAgICAxODgsXG4gICAgICAgIDczLFxuICAgICAgICAyNDksXG4gICAgICAgIDYyLFxuICAgICAgICA5OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiN1BmMW1sNkhQUXZjS0tRV3hoYjlFT0J3SmdXdjlMRk01SUpZUHVkUXBZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzAyMzM2NzQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5MTBEMTY4QkE0RDc5RTVENkE3MkQ2RjAwMDkwRjAxMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzU2NDE2ODlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcwMjMzNjc0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRUMzQjkzM0MzNTIyRTE1QkIwMDcxOTNCMjQ2OUQwRUZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM1NjQxNjg5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MDIzMzY3NDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjRGMzU3OURDOEQyRUUwMjgwQzc4QTY1RkY4MEQ1NkMzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTY0MTY5M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzAyMzM2NzQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1QTQ0NjMzRUI4RDRFNDdERTNDOTY2Q0JFNDc0NEYxRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzU2NDE2OTNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQldBZlFvTE9Sd1duYUhrbGRMYzMyZ1wiLFxuICBcInBob25lSWRcIjogXCIzYTAyY2M5OC00N2ViLTRjMmMtOGI0NS1iOWEzOGVjZGQ3OTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc0LFxuICAgICAgMTAyLFxuICAgICAgMTc5LFxuICAgICAgOTAsXG4gICAgICAxNDEsXG4gICAgICAxNzgsXG4gICAgICAxMTcsXG4gICAgICAyMDUsXG4gICAgICAxMDIsXG4gICAgICAxNDUsXG4gICAgICAxMCxcbiAgICAgIDYyLFxuICAgICAgMjQ1LFxuICAgICAgMTk4LFxuICAgICAgMTA2LFxuICAgICAgNTksXG4gICAgICA5MyxcbiAgICAgIDM2LFxuICAgICAgMTI1LFxuICAgICAgNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE4LFxuICAgICAgMTQ3LFxuICAgICAgMTMxLFxuICAgICAgMTk5LFxuICAgICAgNDksXG4gICAgICAxOTcsXG4gICAgICAyMzUsXG4gICAgICA4NSxcbiAgICAgIDE4LFxuICAgICAgNzgsXG4gICAgICAyMTIsXG4gICAgICAxMjMsXG4gICAgICAzLFxuICAgICAgMTQ1LFxuICAgICAgODAsXG4gICAgICAxNzcsXG4gICAgICA1MSxcbiAgICAgIDE4NixcbiAgICAgIDY1LFxuICAgICAgMTk1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1YTUpDVjhTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcwMjMzNjc0MDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTQzNDc3NzM0NzI4NDI6NEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJISU1BU0hBXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3JiaXlFUTBwVFB1d1lZQkNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0MnhBMEhrU1YwQ0IxQnBqUktGVVVyQjFEU1hqUTNrV3l6OENmdFZLVTFFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk5BQitqcjh4Zk5yNGVoSmhmODJPamJkeDZGYkNNYTcyYUF1RDVLbndVTnFwYm94aFZob3J5amJ1ZmpRbDhHSHhYcmJXWm1ZMHN1T0w5MjRCNFIrYkRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlg3Ulh2ZzlBR3Bodm9Sd0VBU09yV1VEemZpUW5xR2JqRW5EZ1FNRlVVYStOK05mMDdnYlYwOGI3d2lLVDliTlpSUWlCSU9BNENzVW5HOU9namtrNWhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzAyMzM2NzQwOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTY0MTY4NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVCS1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRUJLLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMThXYWZnNmUwRGpHd3JZYWZQamp3THltRm9HVllKWUJXUzR6Mnh0dlovOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2OTM5Nzk5NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
