let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*------ ðð¬ð¬ðâ¢ð´ð¯ððð ------*
*=> Â¿âð¦ððð£ðð¤ ð¥ðððð£ ð¦ð ð¹ð ð¥ ððð¥ðð§ððð  ðð/ð ðª ð¤ðð ð¦ð¥ðððð«ðð£ ð¥ðð£ðð¦ð©?* 
*â¤ Beet-Nodes viene para quedarse!! Beet-Nodes es un servidor/host que mantendrÃ¡ tu Bot activado 24/7 y sin la necesidad de que este viendo que no se apague, con una interfaz muy sencilla, precios accesibles y un soporte excelente podrÃ¡s activar cualquier Bot para tenerlo a tu disposiciÃ³n* 

*â¤ Host: https://billing.hirobeet.xyz*
*â¤ Para mas informacion contacta con Hiro al wa.me/447309247974*
*â¤ Â¿Necesitas ayuda? unete a su grupo OFC https://chat.whatsapp.com/KYGR5bIPuMA9OzjMWmN*
*=> Solo interesados en el abrir su servidor*
*=> No permitido Bots en el grupo*

*_Coá´ÊÊÉªÉ¢Êá´ 2021-2022_*
*_Cá´É´Òá´ á´Êá´á´Éªá´á´á´á´ á´á´ ÊÉªÊá´_*
*_HÉªÊá´ á´Êá´á´Éªá´á´á´á´ á´á´ á´á´É´Òá´_*
*_Tá´á´á´s Êá´s á´á´Êá´á´Êá´s Êá´sá´Êá´ á´á´á´s_*
`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*ð¥ BEET-NODES ð¥*', 'status@broadcast')
}
handler.command = /^sponsor$/i

module.exports = handler
