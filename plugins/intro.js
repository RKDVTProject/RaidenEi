
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let krtu = `☰⃟⟣⟔ Yᴏᴜʀ Cᴀʀᴅ Iɴᴛʀᴏ ⟓⟢⃟
┇⃟⟣⟜ *Nama:* 
┇⃟⟣⟜ *Umur:* 
┇⃟⟣⟜ *Alamat:*
┇⃟⟣⟜ *Hobi:*
┇⃟⟣⟜ *Pasangan:*
┖┈┈┈╼╸╸╸╴╴╴ ╳
`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, krtu, wm,'MENU','.menu', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://facebook.com/",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/p/CfhoPpqMPxQ/?igshid=YmMyMTA2M2Y=", 
    title: 'Iɴᴛʀᴏᴄᴀᴅᴜᴛɪᴏɴ',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

export default handler

