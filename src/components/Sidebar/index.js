import React,  { useEffect, useState } from 'react'
import { Container, Content } from './style'
import { 
  FaTimes, 
  FaHome, 
  FaArrowLeft
} from 'react-icons/fa'


function Sidebar({ active,  reloadFilter}) {

  const [valueCheckbox, setValueCheckbox] = useState("todos");
  const [category, setCategory] = useState([]);

  const closeSidebar = () => {
    active(false)
  }

  const handleChecked = (event) => {
    const value = category;

    if (value.indexOf(event.target.defaultValue) == -1) {
      value.push(event.target.defaultValue);  
    } else {
      value.splice(value.indexOf(event.target.defaultValue, 1))
    }

    setCategory(value);
  }

  const handlerSetValue = (value) => {
    setValueCheckbox(value)
  } 

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
        
      <Content>
        <div className='section'>
          <strong>Ambiente:</strong>
        </div>

        <div className='row checkbox-selection'>
          <div className='col col-md-6'>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Sala" id="check1" onClick={e => handleChecked(e)} />
              <label className="form-check-label" for="check1">
                Sala
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Quarto" id="check2" onClick={e => handleChecked(e)} />
              <label className="form-check-label" for="check2">
                Quarto
              </label>
            </div>            
          </div>
          <div className='col col-md-6'>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Banheiro" id="check3" onClick={e => handleChecked(e)} />
              <label className="form-check-label" for="check3">
                Banheiro
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Escritorio" id="flexCheckChecke4" onClick={e => handleChecked(e)} />
              <label className="form-check-label" for="flexCheckChecke4">
                Escritorio
              </label>
            </div>
          </div>
        </div>
 
        <div className='section'>
          <strong>Preço:</strong>
        </div>

        <div className='row'>
          <div className='col col-md-12 '>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="todos"   onClick={e => handlerSetValue(e.target.defaultValue)}/>
              <label className="form-check-label" for="exampleRadios1">
                Todos
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="500"  onClick={e => handlerSetValue(e.target.defaultValue)} />
              <label className="form-check-label" for="exampleRadios2">
              Até R$ 500,00
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="800"  onClick={e => handlerSetValue(e.target.defaultValue)} />
              <label className="form-check-label" for="exampleRadios3">
              Até R$ 800,00
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="900"   onClick={e => handlerSetValue(e.target.defaultValue)}/>
              <label className="form-check-label" for="exampleRadios4">
              Até R$ 900,00
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios5" value="1200" onClick={e => handlerSetValue(e.target.defaultValue)}  />
              <label className="form-check-label" for="exampleRadios5">
              Até R$ 1200,00
              </label>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='rodape-buttons'>
            <button type="button" className="btn btn-light" onClick={() => reloadFilter({category, valueCheckbox})}>Pesquisar</button>
          </div>
        </div>
        
      </Content>
    </Container>
  )
}

export default Sidebar