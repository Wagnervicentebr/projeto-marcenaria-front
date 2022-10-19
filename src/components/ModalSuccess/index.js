import React, {useState} from 'react'
import { Button, Modal, Input, Switch  } from 'antd';

import { Container } from './style'
import  { FaAngleRight } from 'react-icons/fa'
import CardHome from '../CardHome'


function ModalSuccess({item, onSuccess}) { 
  const [isModalOpen, setIsModalOpen] = useState(true);

    return (
      <Modal title="Sucesso" open={isModalOpen} onOk={onSuccess} >
        <Container>
          <div className='row'>
           <h1>Sucess</h1>
          </div>
        </Container>
      </Modal>
  );
};

export default ModalSuccess