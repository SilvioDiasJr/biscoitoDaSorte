import React, { useEffect, useState } from 'react';

import Biscoito from '../../assets/image/biscoito.png'
import frases from '../../assets/Data/frases';

 import './styles.css'

function BiscoitoSorte() {
  const [frase, setFrase] = useState('')

  function sortearFrase(){
    const index = Math.floor((Math.random() * frases.length))
    {frases[index] === frase ? sortearFrase() : setFrase(frases[index]) }
  }

  useEffect(() => {
    sortearFrase()
  },[])

  return (
    <div className='container'>
      <img src={Biscoito} alt="biscoito da sorte" />
      <button
        className='button'
        onClick={sortearFrase}
      >
      Abrir Biscoito
      </button>
      <h3>{frase}</h3>
    </div>
  )
}

export default BiscoitoSorte;