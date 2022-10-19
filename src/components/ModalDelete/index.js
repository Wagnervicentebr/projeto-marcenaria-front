import React, {useState} from 'react'
import { Button, Modal, Input, Switch  } from 'antd';

import { Container } from './style'
import  { FaAngleRight } from 'react-icons/fa'
import CardHome from '../CardHome'
import ModalSuccess from '../ModalSuccess'
import api from "../../service/ApiService"



function ModalDelete({item, sucess, cancel}) { 
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);

  const handleSucess = () => {
    setIsModalSuccessOpen(false)
    sucess();
  }

  const handleExclude = () => {
    async function getData() {
      const req = {
        id: item._id
      };

      console.log(req);

      const response = await api.delete("/deleteProduct", {data : req})

      if (response) {
        setIsModalOpen(false);
        setIsModalSuccessOpen(true);
      }
    }
    
    getData();
   
  }

  return (
    <>
      <Modal title="Editar item" open={isModalOpen} onOk={handleExclude} onCancel={cancel} >
        <Container>
          <div className='row'>
            <div className='col-md-12 img-item'>
              <img  src={item.urlImage}></img>
            </div>
          <div className='col-md-12 text-center top-2'>
              <span className='text-description'>Deseja realmente excluir <strong>{item.nome}</strong> ?</span>
          </div>
          </div>
        </Container>
      </Modal>

      {isModalSuccessOpen ? <ModalSuccess onSuccess={handleSucess} /> : null}
    </>
  );
};

export default ModalDelete