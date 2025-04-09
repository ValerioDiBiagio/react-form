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

  return (
    <>

      <ul>
        {articles.map((article, i) => (<li key={i}>{article.nome}</li>))}
      </ul>
      <form onSubmit={addNewArticle}>
        <input type="text" value={newArticle} onChange={e => { setNewArticle(e.target.value) }} />
        <button>Aggiungi nuovo videogame</button>
      </form>


    </>
  )
}

export default App
