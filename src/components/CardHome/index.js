import React, { useState, useEffect } from 'react'
import { Container } from './style'
import { FiEdit, FiX } from "react-icons/fi"

function CardHome({data, edit, exclude}) {

  

  return (
    <Container className='row'>
      <div className='row padding-container'>
        {data.map(item => (
          <div className='col col-md-3 card-item-home'>
            <div className='card img-mercadoria'>
              <img src={item.urlImage} className="card-img-top" alt="imagem"></img>
              <div className="card-body">
                <div className='title-card'>
                  <p className="card-text text-title">{item.nome}</p>
                  <p className="card-text text-title">R$ {item.value}</p>
                </div>
                <p className="card-text">{item.description}</p>
                <div className='card-footer-home'>
                  <FiEdit className='footer-icons' onClick={() => edit(item)} />
                  <FiX  className='footer-icons' onClick={() =>  exclude(item)} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default CardHome