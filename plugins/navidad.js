const axios = require('axios')
let handler = async(m, { conn }) => {
let porn = await axios.get('https://meme-api.herokuapp.com/gimme/Christmas')
           conn.sendFile(m.chat, `${porn.data.url}`, '', `${porn.data.title}
π πππ©π πΏππ€π¨ π `, m)
  }
handler.help = ['Navidad']
handler.tags = ['images']
handler.command = /^(navidad)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
