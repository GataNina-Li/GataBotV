let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './Menu2.jpg'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
//   pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `
â­ââã ðâ¡ï¸ðâ¡ï¸ðâ¡ï¸ð ãâââ®
ââ ððð©ðð½ð¤ð© | ððð©ð ð¿ðð¤ð¨
ââ¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡
ââï¸ *Â¡ðola! ${username}* âï¸
ââ¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡
âð° *Creadora/Editora: Gata Dios* 
ââ¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡
â°ââã ðâ¡ï¸ðâ¡ï¸ðâ¡ï¸ð ãâââ¯
ââââââââââââââââââââ
â *INFORMACIÃN | MENU SIMPLE*
ââ¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡
â£ â âï¸ _${usedPrefix}donar_
â£ â âï¸ _${usedPrefix}creditos_
â£ â âï¸ _${usedPrefix}infobot_
â£ â âï¸ _${usedPrefix}grupos_
â£ â âï¸ _${usedPrefix}instalarbot_
â£ â âï¸ _${usedPrefix}reglas_
â£ â âï¸ _${usedPrefix}menusimple_
â£ â âï¸ _${usedPrefix}menuaudios_
â£ â âï¸ _${usedPrefix}menu2_
â£ â âï¸ _${usedPrefix}estado_
â£ â âï¸ _Â¿QuÃ© es un Bot?_
â£ â âï¸ _Codigos para audios_
â£ â âï¸ _TÃ©rminos y condiciones_
â£ â ð® _${usedPrefix}bug *tal comando con fallas*_
â£ â ð® _${usedPrefix}report *tal comando con fallas*_
â£ â ð® _${usedPrefix}reporte *tal comando con fallas*_
â£ â ð _${usedPrefix}owner_
â£ â ð _${usedPrefix}contacto_
â£ â ð¤ _${usedPrefix}join *enlace del grupo*_ 
â£ â ð¤ _${usedPrefix}unete *enlace del grupo*_ 
â£ â ð¤ _${usedPrefix}bots *ver bots*_
â£ â ðï¸ _${usedPrefix}top10gays | topgay_
â£ â ðï¸ _${usedPrefix}toplind@s | toplind@_
â£ â ðï¸ _${usedPrefix}topput@s | toppt_
â£ â ðï¸ _${usedPrefix}toppajer@s | toppajeros_
â£ â ðï¸ _${usedPrefix}topotakus | toptakus_
â£ â ð§© _${usedPrefix}math | mates | matemÃ¡ticas *modo*_
â£ â ð¾ _${usedPrefix}ttt | tictactoe *nombre del la sala*_
â£ â ð§© _${usedPrefix}delttt *nombre del la sala*_
â£ â ð¾ _${usedPrefix}gay2 *@tag*_
â£ â ð¾ _${usedPrefix}gay2 *yo*_
â£ â ð§© _${usedPrefix}gay *@tag / nombre*_
â£ â ð¾ _${usedPrefix}lesbi *@tag / nombre*_
â£ â ð§© _${usedPrefix}pajero *@tag / nombre*_
â£ â ð¾ _${usedPrefix}pajera *@tag / nombre*_
â£ â ð§© _${usedPrefix}puta *@tag / nombre*_
â£ â ð¾ _${usedPrefix}puto *@tag / nombre*_
â£ â ð§© _${usedPrefix}rata *@tag / nombre*_
â£ â ð¾ _${usedPrefix}manco *@tag / nombre*_
â£ â ð§© _${usedPrefix}manca *@tag / nombre*_
â£ â ð¾ _${usedPrefix}formarpareja | pareja5_
â£ â ð§© _${usedPrefix}dado_
â£ â ð¾ _${usedPrefix}simsimi | simi | bot *texto*_
â£ â ð§© _${usedPrefix}formartrio_
â£ â ð¾ _${usedPrefix}love *@tag / nombre*_
â£ â ð§© _${usedPrefix}amigorandom | amigo | amistad_
â£ â ð¾ _${usedPrefix}slot *cantidad*_
â£ â ð§© _${usedPrefix}ppt *piedra / papel / tijera*_
â£ â ð¾ _${usedPrefix}prostituta *@tag / nombre*_
â£ â ð§© _${usedPrefix}prostituto *@tag / nombre*_
â£ â âï¸ _${usedPrefix}imagen | image | gimage *texto*_
â£ â âï¸ _${usedPrefix}ytsearch *texto*_
â£ â âï¸ _${usedPrefix}dlaudio *link yt*_
â£ â âï¸ _${usedPrefix}dlvid *link yt*_
â£ â âï¸ _${usedPrefix}ytmp3 *link yt*_
â£ â âï¸ _${usedPrefix}ytmp4 *link yt*_
â£ â âï¸ _${usedPrefix}play *titulo del audio*_
â£ â âï¸ _${usedPrefix}play2 *titulo del video*_
â£ â âï¸ _${usedPrefix}play3 *titulo del audio/video*_
â£ â âï¸ _${usedPrefix}letra *nombredelacanciÃ³n*_
â£ â âï¸ _${usedPrefix}google *texto*_
â£ â âï¸ _${usedPrefix}googlef *texto*_
â£ â âï¸ _${usedPrefix}pinterestvideo | pintvid *linkPinterest*_
â£ â âï¸ _${usedPrefix}tiktokaudio *link del tiktok*_
â£ â âï¸ _${usedPrefix}tiktok *link*_
â£ â âï¸ _${usedPrefix}tiktok2 | Tiktok2 *link del tiktok*_
â£ â âï¸ _${usedPrefix}acortar | reducir *link*_
â£ â âï¸ _${usedPrefix}pinterest | pinterest2 *texto*_
â£ â âï¸ _${usedPrefix}ssweb | capturar | captura *link*_
â£ â âï¸ _${usedPrefix}animeinfo *nombre del anime*_
â£ â âï¸ _${usedPrefix}wpanime | fondoanime_
â£ â âï¸ _${usedPrefix}verinstagram | verig |igver *usuario*_
â£ â âï¸ _${usedPrefix}twittervideo | twvid *link de twitter*_
â£ â âï¸ _${usedPrefix}wikipedia | wiki | internet *texto*_
â£ â âï¸ _${usedPrefix}spotify | spotimusica *autor, cancion*_
â£ â âï¸ _${usedPrefix}spotify | spotimusica *autor, cancion*_
â£ â ð _${usedPrefix}admins *texto*_ 
â£ â ð _${usedPrefix}aÃ±adir *numero*_ (desactivado)
â£ â ð _${usedPrefix}sacar @tag_ (desactivado)
â£ â ð _${usedPrefix}save *@tag + nombre de contacto*_
â£ â ð _${usedPrefix}daradmin | darpoder *@tag*_
â£ â ð _${usedPrefix}quitaradmin | quitarpoder *@tag*_
â£ â ð _${usedPrefix}grupo *abierto / cerrado*_
â£ â ð _${usedPrefix}enable welcome_
â£ â ð _${usedPrefix}disable welcome_
â£ â ð _${usedPrefix}enable antilink_ *(WhatsApp)*
â£ â ð _${usedPrefix}disable antilink_ 
â£ â ð _${usedPrefix}enable antilink2_ *(https:)*
â£ â ð _${usedPrefix}disable antilink2_
â£ â ð _${usedPrefix}enable delete_
â£ â ð _${usedPrefix}disable  delete_ 
â£ â ð _${usedPrefix}link_
â£ â ð _${usedPrefix}notificar | hidetag *texto*_
â£ â ð _${usedPrefix}setname *Nuevo nombre del grupo*_
â£ â ð _${usedPrefix}setdesc *Nueva descripciÃ³n grupo*_
â£ â ð _${usedPrefix}infogrupo_
â£ â ð _${usedPrefix}invocar *texto*_
â£ â ð _${usedPrefix}del *responder a un mensaje del bot*_
â£ â ð _${usedPrefix}fantasmas_
â£ â ð _${usedPrefix}banchat_
â£ â ð _${usedPrefix}unbanchat_
â£ â ð¨ _${usedPrefix}s_
â£ â ð¨ _${usedPrefix}sticker_
â£ â ð¨ _${usedPrefix}semoji | emoji_
â£ â ð¨ _${usedPrefix}wasted_
â£ â ð¨ _${usedPrefix}stonks_
â£ â ð¨ _${usedPrefix}trash *Responda a una foto*_
â£ â ð¨ _${usedPrefix}sgay *Responda a una foto*_
â£ â ð¨ _${usedPrefix}circle *Responda a una foto*_
â£ â ð¨ _${usedPrefix}stickermaker_
â£ â ð¨ _${usedPrefix}attp *texto*_
â£ â ð¨ _${usedPrefix}attp2 | s1 | sa *texto*_
â£ â ð¨ _${usedPrefix}stickerfilter | cs2_
â£ â ð¨ _${usedPrefix}tomp3 | mp3 *responde a un video*_
â£ â ð¨ _${usedPrefix}toimg | img *responde a un sticker*_
â£ â ð¨ _${usedPrefix}togif | gif *responde a sticker/video*_
â£ â ð¨ _${usedPrefix}ytcomentario | ytcomentar *texto*_
â£ â ð¨ _${usedPrefix}blur *responde a una imagen*_
â£ â ð¨ _${usedPrefix}jaal *Responda a una foto*_
â£ â ð¨ _${usedPrefix}swm *imagen | video | gif*_
â£ â ð¨ _${usedPrefix}tovideo *responde a una nota de voz*_
â£ â ð¨ _${usedPrefix}wanted *Responda a una foto*_
â£ â ðª _${usedPrefix}style *texto*_
â£ â ðª _${usedPrefix}estilo *texto*_
â£ â ð¯ _${usedPrefix}randomwallpaper_
â£ â ð² _${usedPrefix}compartirfoto_
â£ â ð³ _${usedPrefix}futbol_
â£ â ð¯ _${usedPrefix}Messi_
â£ â ð² _${usedPrefix}animal_
â£ â ð³ _${usedPrefix}meme_
â£ â ð¯ _${usedPrefix}meme2_
â£ â ð² _${usedPrefix}meme3_
â£ â ð³ _${usedPrefix}cat | gato | gata_
â£ â ð¯ _${usedPrefix}dog | perro | perra_
â£ â ð² _${usedPrefix}pikachu_
â£ â ð³ _${usedPrefix}waifu_
â£ â ð¯ _${usedPrefix}blackpink_
â£ â ð² _${usedPrefix}reto_
â£ â ð³ _${usedPrefix}verdad_
â£ â ð¯ _${usedPrefix}imagenrandom | random | epico_
â£ â ð² _${usedPrefix}neko_
â£ â ð³ _${usedPrefix}lolivid_
â£ â ð¯ _${usedPrefix}iqtest | iq | inteligencia_
â£ â ð² _${usedPrefix}kpopitzy_
â£ â ð³ _${usedPrefix}navidad_
â£ â ð¯ _${usedPrefix}loli_
â£ â ð² _${usedPrefix}gawrgura_
â£ â ð³ _${usedPrefix}miku_
â£ â ð¯ _${usedPrefix}nyan_
â£ â ð² _${usedPrefix}pat_
â£ â ð³ _${usedPrefix}itachi_
â£ â ð¯ _${usedPrefix}slap_
â£ â ð² _${usedPrefix}pat_
â£ â ð³ _${usedPrefix}perfil_
â£ â ð¯ _${usedPrefix}scan | datos | escaneo_
â£ â ð² _${usedPrefix}kpop_
â£ â ð³ _${usedPrefix}qr *texto*_
â£ â ð¯ _${usedPrefix}afk | aviso | informo *motivo*_
â£ â ð² _${usedPrefix}CristianoRonaldo_
â£ â ð³ _${usedPrefix}pregunta *pregunta*_
â£ â ð¯ _${usedPrefix}mention | mensaje *texto*_
â£ â ð² _${usedPrefix}spamchat *texto*_
â£ â ð³ _${usedPrefix}traducir es *texto*_
â£ â ð¯ _${usedPrefix}zodiac | zodiaco *AAAA MM DD*_
â£ â ð² _${usedPrefix}readmore | leermas *texto1| texto2*_
â£ â ð³ _${usedPrefix}calc | calculadora *expresiÃ³n mat.*_ 
â£ â ð¯ _${usedPrefix}spamwa *numero|texto|cantidad*_
â£ â ð² _${usedPrefix}readqr *responde a un cÃ³digo QR*_
â£ â ð³ _${usedPrefix}anime *random / waifu / husbu /neko*_
â£ â ð¯ _${usedPrefix}subirestado *texto / video|imagen*_
â£ â ð² _${usedPrefix}subirestado *texto / gif*_
â£ â ð³ _${usedPrefix}agendar *@tag + nombre contacto*_
â£ â ð¯ _${usedPrefix}guardar *@tag + nombre contacto*_
â£ â ð² _${usedPrefix}spam *numero|texto|cantidad*_ 
â£ â ð³ _${usedPrefix}spoiler | hidetext *texto1| texto2*_
â£ â ð¯ _${usedPrefix}experiencia | exp
â£ â ð _${usedPrefix}labiblia_
â£ â ð¤ _${usedPrefix}bass_
â£ â ð¤ _${usedPrefix}deep_
â£ â ð¤ _${usedPrefix}earrape_
â£ â ð¤ _${usedPrefix}fast_
â£ â ð¤ _${usedPrefix}fat_
â£ â ð¤ _${usedPrefix}nightcore_
â£ â ð¤ _${usedPrefix}reverse_
â£ â ð¤ _${usedPrefix}robot_
â£ â ð¤ _${usedPrefix}slow_
â£ â ð¤ _${usedPrefix}tupai
â£ â ð¤ _${usedPrefix}smooth_
â£ â ð¤ _${usedPrefix}blown_
â£ â ð¤ _${usedPrefix}vibracion *cantidad*_
â£ â ð¤ _${usedPrefix}tovn *audio a nota de voz*
â£ â ð _${usedPrefix}menu2_
â£ â ð _${usedPrefix}menuaudios_
â£ â ð _${usedPrefix}audios_
â£ â ð¦ _${usedPrefix}caja_
â£ â ð¦ _${usedPrefix}almacen_
â£ â ð¦ _${usedPrefix}cjalmacen_
â£ â ð¤ _${usedPrefix}chatanonimo | anonimochat_
â£ â ð¤ _${usedPrefix}anonimoch_
â£ â ð¤ _${usedPrefix}start_
â£ â ð¤ _${usedPrefix}next_
â£ â ð¤ _${usedPrefix}leave_
â£ â âï¸ _${usedPrefix}stop_
â£ â âï¸ _${usedPrefix}jadibot_
â£ â âï¸ _${usedPrefix}getcode_
â£ â ðª _${usedPrefix}lolice_
â£ â ð _${usedPrefix}simpcard_
â£ â ðª _${usedPrefix}hornycard_ 
â£ â ð _${usedPrefix}lblackpink_
â£ â ðª _${usedPrefix}logocorazon_
â£ â ð _${usedPrefix}tahta *texto*_
â£ â ðª _${usedPrefix}nulis | notas *texto*_
â£ â ð _${usedPrefix}nulis2 | notas2 *texto*_
â£ â ðª _${usedPrefix}lolice *@tag*_
â£ â ðª _${usedPrefix}simpcard *@tag*_
â£ â ð® _${usedPrefix}logos_ (lista)
â£ â ð _${usedPrefix}boost | acelerar_
â£ â ð _${usedPrefix}restart_
â£ â ð _${usedPrefix}banlist_
â£ â ð _${usedPrefix}virtext1 | traba1_
â£ â ð _${usedPrefix}actualizar | update_
â£ â ð _${usedPrefix}bc *texto*_
â£ â ð _${usedPrefix}bcgc *texto*_
â£ â ð _${usedPrefix}bcbot *texto*_
â£ â ð _${usedPrefix}setbye *@tag*_
â£ â ð _${usedPrefix}banuser *@tag*_
â£ â ð _${usedPrefix}enable *public*_
â£ â ð _${usedPrefix}disable *public*_
â£ â ð _${usedPrefix}unbanuser *@tag*_
â£ â ð _${usedPrefix}listgroup_
â£ â ð _${usedPrefix}enable *restrict*_
â£ â ð _${usedPrefix}enable *autoread*_
â£ â ð _${usedPrefix}setwelcome *@tag*_
â£ â ð _${usedPrefix}enable *autoread*_
â£ â ð _${usedPrefix}disable *autoread*_
â£ â ð _${usedPrefix}bcbot *texto*_
â£ â ð _${usedPrefix}bcgc *texto*_
ââââââââââââââââââââ
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['menusimple']
handler.tags = ['General']
handler.command = /^(menusimple)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
