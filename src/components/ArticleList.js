import Article from "./Article"

function ArticleList ({posts}) {
  const articles = posts.map( ({id, date, minutes, preview, title}) => {
  return <Article key={id} date={date} minutes={minutes} preview={preview} title={title} />
})
  return (
    <main>
      {articles}
    </main>
  )
}
export default ArticleList