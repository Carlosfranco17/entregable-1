import React from 'react'
import Button from './Button'
import "./style/ContainerInfo.css"

const ContainerInfo = ({quote,handleNewQuote}) => {
  return (
    <section className='section'>
        <h2 className='Titulo'>Galleta de la Fortuna</h2>
                
        <div className='Tarjeta'>
          
        
          <p className='frase'>{quote.phrase}</p>
        
          <h4 className='autor'>Fuente: {quote.author}</h4>
        
        </div>

        <Button className='button' handleNewQuote={handleNewQuote}/>
      </section>
  )
}

export default ContainerInfo