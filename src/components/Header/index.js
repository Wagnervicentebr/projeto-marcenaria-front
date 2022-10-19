import React, { useState, useEffect } from 'react'
import { Container } from './style'
import { FaBars } from 'react-icons/fa'
import { FiPlusCircle } from 'react-icons/fi'
import Sidebar from '../Sidebar'
import ModalCreateNew from '../ModalCrateNew'


function Header({filter, onNewitem}) {
  const [sidebar, setSidebar] = useState(false)
  const [modalNewOpen, setModalNewOpen] = useState(false)


  const showSiderbar = () => setSidebar(!sidebar)

  const handleCancel = () => setModalNewOpen(false);

  return (
    <Container  className='row'>
      <div className='row pd-2'>
        <div className='col col-md-2 btn-menu'>
          <FaBars className='icon-new' onClick={showSiderbar} />
        </div>
        <div className='col col-md-8'>
          <h3 className='clientName col align-self-center offset-md-4'>Vitrine de Móveis</h3>
        </div>
        <div className='col col-md-2 btn-new'>
          <FiPlusCircle className='icon-new' onClick={() => setModalNewOpen(true)}/>
        </div>
      </div>
      
      {sidebar && <Sidebar active={setSidebar}  reloadFilter={ data => filter(data)}/>}
      {modalNewOpen ? <ModalCreateNew cancel={handleCancel} onSuccess={onNewitem} /> : null}
    </Container>
  )
}

export default Header