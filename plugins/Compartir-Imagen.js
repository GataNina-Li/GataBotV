let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
let res = await fetch('https://caliphapi.com/api/ppcouple?apikey=BNeGhnOu')
if (res.status != 200) throw await res.text()
let json = await res.json()
if (!json.status) throw json
conn.sendButtonImg(m.chat, json.result.female,  'Chica πββοΈ', 'π πππ©π πΏππ€π¨ π', 'Siguiente π', '.compartirfoto', m)
conn.sendButtonImg(m.chat, json.result.male, 'Chico πββοΈ', 'π πππ©π πΏππ€π¨ π', 'Siguiente π', '.compartirfoto', m)}
handler.command = /^compartirfoto$/i
module.exports = handler
