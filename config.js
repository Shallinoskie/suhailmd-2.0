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
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaaShag4CrfjCj8wPz1E" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2349114929581";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_28_11_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDUxLFxuICAgICAgICAzNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDc3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTksXG4gICAgICAgIDMxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgODgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQsXG4gICAgICAgIDUsXG4gICAgICAgIDc3LFxuICAgICAgICAwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1NCxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgODcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1LFxuICAgICAgICA0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3MixcbiAgICAgICAgMjEzLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYzLFxuICAgICAgICA0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDk1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTczLFxuICAgICAgICA3MSxcbiAgICAgICAgMjI5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDMsXG4gICAgICAgIDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA4NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA5NixcbiAgICAgICAgMjA5LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDY4LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDExLFxuICAgICAgICA0MixcbiAgICAgICAgNjAsXG4gICAgICAgIDQzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMixcbiAgICAgICAgMTUxLFxuICAgICAgICA0MixcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzksXG4gICAgICAgIDY5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ3LFxuICAgICAgICA0NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDYsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwia0RvMGVFMWRwVEdPZStmUFdzMkJOT3hveWJhekJ4cWltWUdNT05ZRFhRdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRlBwOTFjbHBTUjJ5MERKZ3pXM2xDd1wiLFxuICBcInBob25lSWRcIjogXCIyM2EzMjNlNC0wNjAxLTRmNGQtYWQ0Mi02OWNhZmU0ZGM0YjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjgsXG4gICAgICAxOTksXG4gICAgICAyMDEsXG4gICAgICAxNDgsXG4gICAgICAyNDYsXG4gICAgICA3MixcbiAgICAgIDkwLFxuICAgICAgMjIzLFxuICAgICAgMTg0LFxuICAgICAgMTIzLFxuICAgICAgNTIsXG4gICAgICAxMDMsXG4gICAgICAxMjMsXG4gICAgICAxMjMsXG4gICAgICAxODQsXG4gICAgICAxOTgsXG4gICAgICAxNCxcbiAgICAgIDI1MSxcbiAgICAgIDcsXG4gICAgICA5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODksXG4gICAgICAyNCxcbiAgICAgIDE5MixcbiAgICAgIDc0LFxuICAgICAgMTcxLFxuICAgICAgMTI1LFxuICAgICAgMzgsXG4gICAgICA3LFxuICAgICAgNDgsXG4gICAgICAxMzksXG4gICAgICAxNzAsXG4gICAgICAzMixcbiAgICAgIDExNSxcbiAgICAgIDIzOSxcbiAgICAgIDEzMCxcbiAgICAgIDY2LFxuICAgICAgOCxcbiAgICAgIDI1NSxcbiAgICAgIDU0LFxuICAgICAgODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNkpWOVI3QkNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMTQ5Mjk1ODE6NzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjgwNDA2NDg1NDg1ODI6NzdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGphbS84REVLYjl5TGtHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzWkFaaDIrVmVsZy8yOFFHM3FJRUlWNm0rQW5TUFFJbURiaS9xbTNkeFF3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlZaZVQrQXZtTzV5RGtPVkVoRG00ano5ZFRPMVFVOU1VOEx4ZmpHV3h2REdGYWFna00rRnJNejFmOVdnZlBCZklKc1l5SkQ5RHZUbmJTK25nNWNiZERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInBuQ1BBWVUxWTBEbUg5K1I0LzJrTUZlWkI5eVJTajJpTXNJdHlibDgyelNtM2ozbWVuTFBFVjNoZ2hrUit2RUFzWmV1S2xjVFhOby9BSEJZNERSc2lnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMTQ5Mjk1ODE6NzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMzQ2MDkwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "⚡",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "☠︎︎𝙨𝙝𝙖𝙡𝙡𝙞➯𝙣𝙤𝙨𝙠𝙮☠︎︎",
  packname: process.env.PACK_NAME || "☠︎︎𝙨𝙝𝙖𝙡𝙡𝙞➯𝙣𝙤𝙨𝙠𝙮☠︎︎",
  botname : process.env.BOT_NAME  || "☠︎︎𝙨𝙝𝙖𝙡𝙡𝙞➯𝙣𝙤𝙨𝙠𝙮☠︎︎",
  ownername:process.env.OWNER_NAME|| "☠︎︎𝙨𝙝𝙖𝙡𝙡𝙞➯𝙣𝙤𝙨𝙠𝙮☠︎︎",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
