// importare array
import videogames from './data/videogames';
import { useState } from 'react'

function App() {


  return (
    <>
      <ul>
        {videogames.map(videogame => <li>{videogame.nome}</li>)}
      </ul>

    </>
  )
}

export default App
