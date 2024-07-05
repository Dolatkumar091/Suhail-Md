const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // SUHAIL_10_51_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNixcbiAgICAgICAgNTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDg3LFxuICAgICAgICAzMSxcbiAgICAgICAgNixcbiAgICAgICAgODksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDUzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUwLFxuICAgICAgICA3NixcbiAgICAgICAgOTAsXG4gICAgICAgIDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDQ4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTIxLFxuICAgICAgICA5OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNixcbiAgICAgICAgNDgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDYsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDksXG4gICAgICAgIDMsXG4gICAgICAgIDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4LFxuICAgICAgICA0NSxcbiAgICAgICAgOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDUyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDMsXG4gICAgICAgIDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzksXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMixcbiAgICAgICAgMTc0LFxuICAgICAgICA2MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIwLFxuICAgICAgICA1OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieW9ZTnk1YUhuVHo0aUUweEFwKzVTOUR6LzdnSEt6emIrZUdsVDAxRlBCND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQldmZ1BrZ1ZUNVNtaUM5LU40dEl0QVwiLFxuICBcInBob25lSWRcIjogXCIzZWYxZmUxNi04OWIzLTQyNmEtYmFhMS05YmY0N2QwOWI1ZTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNixcbiAgICAgIDE2MixcbiAgICAgIDc5LFxuICAgICAgMjAwLFxuICAgICAgMjEsXG4gICAgICAxMzQsXG4gICAgICAzNSxcbiAgICAgIDIyNCxcbiAgICAgIDI1NCxcbiAgICAgIDE2MSxcbiAgICAgIDc3LFxuICAgICAgMTgxLFxuICAgICAgNDQsXG4gICAgICAxMTMsXG4gICAgICAxMjYsXG4gICAgICA5MyxcbiAgICAgIDMzLFxuICAgICAgMTI3LFxuICAgICAgMTIyLFxuICAgICAgMTQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4OCxcbiAgICAgIDk2LFxuICAgICAgMTY3LFxuICAgICAgMzQsXG4gICAgICAxMjAsXG4gICAgICAxMzIsXG4gICAgICAyMTYsXG4gICAgICAxMjUsXG4gICAgICAxODksXG4gICAgICA4OCxcbiAgICAgIDY2LFxuICAgICAgNzcsXG4gICAgICAyMzYsXG4gICAgICAxOTUsXG4gICAgICAyMDMsXG4gICAgICA5MixcbiAgICAgIDE3NSxcbiAgICAgIDIwOSxcbiAgICAgIDEzMyxcbiAgICAgIDIyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGTFhFS0FETVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDQxNjg4MjcyOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTXIgRG9sYXQgS3VtYXIgTWVlbGFuaVwiLFxuICAgIFwibGlkXCI6IFwiMTMwNDI5NzAxMTA3NzI1OjE1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pmUG1jUURFSkczajdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRUtYeVJJdDRaKy9ZbkdTVHR1QlFlUWZJcGhmczhENU5jNXpvall6cmhudz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJGTFkzSGJuY29lOVBaZkNmZ3NSMWZXSTV1K3J1MHg1ZmRYcStXd0w0aUZMOEVaWFBSZFJ2T1RCVys0M1F6Wld5cTE4ZVllZjhjbGpOdGdxKy9GZGNBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCYkRBUS8yU25KZnlBaGREc1A1WlJZS1BGcndTQ0NrVkZLZkt6NjBtRmhTdHpSU2JqQWVCVUlqWjZBajkyT1NJQlhOY0FHVmhzTW4yVXUwbllIZEtoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0NDE2ODgyNzI6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5OTE3NDYxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
