let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/lolice', {
    avatar: await conn.getProfilePicture(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  }), 'lolice.png', 'π’ *Lolicons como tΓΊ solo pertenecen a la cΓ‘rcel* π’\nπ πππ©π πΏππ€π¨ π', m)
}

handler.help = ['lolice']
handler.tags = ['maker']

handler.command = /^(lolice)$/i

module.exports = handler
