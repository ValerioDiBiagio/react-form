// importare array
import videogames from './data/videogames';
// importare useState
import { useState } from 'react'

function App() {

  const [videogameName, setVideogameName] = useState('')


  return (
    <>

      <ul>
        {videogames.map(videogame => <li key={videogames.id}>{videogame.nome}</li>)}
      </ul>
      <form>
        <input type="text" value={videogameName} onChange={e => { setVideogameName(e.target.value) }} />
      </form>

    </>
  )
}

export default App
