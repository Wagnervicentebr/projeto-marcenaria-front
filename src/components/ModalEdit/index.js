import { Button, Modal, Input, Switch  } from 'antd';
import React, { useState } from 'react';
import { Container } from './style'
import ModalSuccess from '../ModalSuccess'
import api from "../../service/ApiService"


const ModalEdit = ({item, cancel, onSuccess}) => {
  const initialValue = {
    category: item.category,
    description : item.description,
    nome : item.nome,
    urlImage : item.urlImage,
    value: item.value
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
    async function getUpdate() {
      const req = {
        "_id": item._id,
        "update": {
          description : values.description,
          nome : values.nome,
          value: values.value
        }
    }

      console.log(req);

      const response = await api.put("/updateProduct", req)

      if (response) {
        setIsModalOpen(false);
        setIsModalSuccessOpen(true);
      }
    }
    
    getUpdate();
  }

  return (
    <>
      <Modal title="Editar item" open={isModalOpen} onOk={acaoOK} onCancel={cancel} >
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
                  <span >Ativo:</span>
                </div>
                <div class="col-4">
                <Switch
                  checked={input}
                  onChange={() => {
                    setInput(!input);
                  }}
                />
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

export default ModalEdit;