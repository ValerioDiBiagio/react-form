// importare array
import videogames from './data/videogames';
// importare useState
import { useState } from 'react'

function App() {

  const [articles, setArticles] = useState(videogames);

  const [newArticle, setNewArticle] = useState('');

  const id = parseInt((articles.at(-1).id) + 1);

  const newVideogame = {
    id,
    nome: newArticle
  }

  const addNewArticle = event => {
    event.preventDefault();

    const updateArticle = [...articles, newVideogame];

    setArticles(updateArticle);
    setNewArticle('');
  }

  const removeArticle = i => {
    const updateVideogames = articles.filter((article, index) => {
      return index !== i
    })

    setArticles(updateVideogames);
  }

  return (
    <>

      <ul>
        {articles.map((article, i) => (<li key={i}>{article.nome} <button onClick={() => removeArticle(i)}><i className="fa-solid fa-trash"></i></button></li>))}
      </ul>
      <form onSubmit={addNewArticle}>
        <input type="text" value={newArticle} onChange={e => { setNewArticle(e.target.value) }} />
        <button>Aggiungi nuovo videogame</button>

      </form>


    </>
  )
}

export default App
