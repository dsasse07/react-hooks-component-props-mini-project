function generateEmojiString (emojiCount, emoji){
  let emojiString = ""
  
  for (let i=1; i <= emojiCount; i++) {
    emojiString += emoji
  }
  return emojiString
}


function Article ({ id, date = "January 1, 1970", minutes, preview, title }) {
  let emoji, emojiCount
  if (minutes < 30) {
    emojiCount = Math.round(minutes/5)
    emoji = "☕️"
  } else {
    emojiCount = Math.round(minutes/10)
    emoji = "🍱"
  }

  const emojiString = generateEmojiString(emojiCount, emoji)

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {emojiString}{minutes} min read</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article