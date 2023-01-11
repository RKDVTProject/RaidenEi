import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
  
  case 'gabut':
  m.reply('Hooh')
  break
  case 'deva':
  m.reply('nyari ayang kuh? >///<')
  break
  case 'Depa':
  m.reply('nyari ayang kuh? >///<')
  break
  case 'nyimak':
  m.reply('iyh')
  break
  default:
  if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
  throw false
  } 
}

handler.tags = ['main']
handler.command = /^(bot2)$/i

export default handler