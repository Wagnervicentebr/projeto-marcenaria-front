import { Button, Modal, Input, Switch  } from 'antd';
import React, { useState } from 'react';
import { Container } from './style'
import ModalSuccess from '../ModalSuccess'
import api from "../../service/ApiService"


const ModalCreateNew = ({cancel, onSuccess}) => {
  const initialValue = {
    category: "",
    description : "",
    nome : "",
    urlImage : "",
    value: ""
  }


  const [isModalOpen, setIsModalOpen] = useState(true);
  const [input, setInput] = useState(true)
  const [values, setValues] = useState(initialValue)
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);
  

  const onChange = (event) => {
    const { name, value } = event.target;

    setValues({...values, [name]: value});
  }

  const handleSucess = () => {
    setIsModalSuccessOpen(false)
    onSuccess();
  }

  const acaoOK = () => {
    async function saveNew() {
      const req = {
        "nome": values.nome,
        "urlImage": values.urlImage,
        "value": values.value,
        "category": values.category,
        "description": values.description
    }

      console.log(req);

      const response = await api.post("/createProduct", req)

      if (response) {
        setIsModalOpen(false);
        setIsModalSuccessOpen(true);
      }
    }
    
    saveNew();
  }

  return (
    <>
      <Modal title="Modal criar" open={isModalOpen} onOk={acaoOK} onCancel={cancel} >
        <Container>
          <div className='container'>
            <div className='col-md-12 img-item'>
              <img  src={values.urlImage}></img>
            </div>
            <div className='row form'>
              <div class="row form-values">
                <div class="col-4 text-descripiton">
                  <span >Titulo:</span>
                </div>
                <div class="col-4">
                  <input  name="nome" id="nome" onChange={onChange} value={values.nome}/>
                </div>
              </div>

              <div class="row form-values">
                <div class="col-4 text-descripiton">
                  <span >Valor:</span>
                </div>
                <div class="col-4">
                  <input  type="number" name="value" id="value" onChange={onChange} value={values.value}/>
                </div>
              </div>

              <div class="row form-values">
                <div class="col-4 text-descripiton">
                  <span >Descrição:</span>
                </div>
                <div class="col-4">
                  <input  name="description" id="description" onChange={onChange} value={values.description}/>
                </div>
              </div>

              <div class="row form-values">
                <div class="col-4 text-descripiton">
                  <span >Categoria:</span>
                </div>
                <div class="col-4">
                  <input  name="category" id="category" onChange={onChange} value={values.category}/>
                </div>
              </div>

              <div class="row form-values">
                <div class="col-4 text-descripiton">
                  <span >url imagem:</span>
                </div>
                <div class="col-4">
                  <input  name="urlImage" id="urlImage" onChange={onChange} value={values.urlImage}/>
                </div>
              </div> 
            </div>
          </div>
        </Container>
      </Modal>

      {isModalSuccessOpen ? <ModalSuccess onSuccess={handleSucess} /> : null}
    </>
  );
};

export default ModalCreateNew;