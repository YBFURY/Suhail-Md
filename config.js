const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2349121214408" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349121214408";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2349121214408";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349121214408,2349121214408";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_43_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTksXG4gICAgICAgIDM4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgODAsXG4gICAgICAgIDYwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQzLFxuICAgICAgICA2NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUwLFxuICAgICAgICA0LFxuICAgICAgICAxMDksXG4gICAgICAgIDg4LFxuICAgICAgICA3NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMixcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDY5LFxuICAgICAgICA4NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzksXG4gICAgICAgIDQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI2LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDUsXG4gICAgICAgIDUwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDMzLFxuICAgICAgICA5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDcwLFxuICAgICAgICA2NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMSxcbiAgICAgICAgMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ2LFxuICAgICAgICA4NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDg2LFxuICAgICAgICA4OSxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjAwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIsXG4gICAgICAgIDIwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODksXG4gICAgICAgIDE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQwLFxuICAgICAgICAxODcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjU5ajJmWDNKRXJZVmljc29GcVZ1SlAraXdGb3k2RmtrYUU2L1VsamNaUE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlBKT3JySFBUVFZtdVlJZzFnQkRpaVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmY5MGRiNmItOTY1ZS00NGJkLTg5NDQtZjk1YWMyMTgwY2FjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMwLFxuICAgICAgMjAyLFxuICAgICAgMjI5LFxuICAgICAgMTA3LFxuICAgICAgMTYxLFxuICAgICAgOTAsXG4gICAgICA0NSxcbiAgICAgIDc1LFxuICAgICAgMCxcbiAgICAgIDI0NCxcbiAgICAgIDIyMSxcbiAgICAgIDIwMixcbiAgICAgIDE4LFxuICAgICAgMzMsXG4gICAgICAxNzUsXG4gICAgICAxMzMsXG4gICAgICAyMDMsXG4gICAgICAxODIsXG4gICAgICAyMTYsXG4gICAgICAxMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUwLFxuICAgICAgMTY2LFxuICAgICAgMjEsXG4gICAgICA1NSxcbiAgICAgIDU3LFxuICAgICAgMjU0LFxuICAgICAgMTYxLFxuICAgICAgMTUyLFxuICAgICAgMjUzLFxuICAgICAgMTMsXG4gICAgICAxNTEsXG4gICAgICAyNDcsXG4gICAgICAxMTcsXG4gICAgICAxMzMsXG4gICAgICAxMzYsXG4gICAgICA1NCxcbiAgICAgIDMyLFxuICAgICAgMjQ1LFxuICAgICAgMTMzLFxuICAgICAgMjM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZTMUdHVllKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTIxMjE0NDA4OjQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTM3OTM2MjIwMjg0NjM6NDhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnZMdDdjR0VKK001ck1HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGOTRmMkMxeGtvL3VWK2xteHQxQzJoUThDSFUxbDJJYmlJa2tWdmxMYlZ3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJRd0txTUNtdTd6bnhwWVh0bTNKc3IzMnIwcnZHeWtGWkpKSW5UWU9UdGxwRUlPZklZZ0hPbFVUeW1CRzNDWUF1YjI5NUY5dTl3WUpXMUJXeEdFeUJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk8wYlZ2eEJ3cTBNcnJ0UE93S2dqTW5oVUwyNC9GVkF5eW5Ldm5xeU9yVE05SUhEaFRSTjI0cnZRRkozK1JZRnBBT2xiZDNDdlF5bHJoNmFOT2ZybmlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjEyMTQ0MDg6NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTI0MDIyN1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Izzy MD",
  ownername:process.env.OWNER_NAME|| "Izzy MD",


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
