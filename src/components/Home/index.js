import React, { useEffect, useState } from 'react'
import { Container } from './style'
import  { FaAngleRight } from 'react-icons/fa'
import CardHome from '../CardHome'
import ModalEdit from '../ModalEdit'
import ModalDelete from '../ModalDelete'
import Header from '../Header'

import api from "../../service/ApiService"



function Home() { 


  const [isModalEditActive, setIsModalEditActive] = useState(false);
  const [isModalDeleteActive, setModalDeleteActive] = useState(false);
  const [itemToEdit, setItemToEdit] = useState({});
  const [itemToExclude, setItemToExclude] = useState({});
  const [requestData, setRequestData] = useState([]);
  const [requestDataOriginal, setRequestDataOriginal] = useState([]);
  const [reloadData, setReloadData] = useState(false);

  useEffect(() => {
    async function getData() {
      const response = await api.get("/products")

      setRequestData(response.data)
      setRequestDataOriginal(response.data)
    }
    
    getData();
  }, [reloadData])

  const handleEditAction = (item) => {
    setItemToEdit(item)
    setIsModalEditActive(true);
  }

  const handleDeleteAction = (item) => {
    setItemToExclude(item)
    setModalDeleteActive(true);
  }

  const handleModalCancel = () => {
    setIsModalEditActive(false);
    setModalDeleteActive(false);
  }

  const handleEdit = () => {
    setIsModalEditActive(false);
    setReloadData(!reloadData)
  }

  const handlerFilter = (dados) => {
    let newData = [];

    if (dados.category.length > 0) {
      for (let i = 0; i < dados.category.length; i++) {
        for (let j = 0; j < requestDataOriginal.length; j++) {
            if (dados.category[i] == requestDataOriginal[j].categoy) {
              newData.push(requestDataOriginal[j])
            }
        }
      }
    } else {
      newData = requestDataOriginal;
    }

    if (dados.valueCheckbox != "todos") {
      newData = newData.filter(item => {
        return Number(dados.valueCheckbox) >= Number(item.value)   
      })
    }
    
    
    setRequestData(newData)
  }

  const handleSucessDelete = () => {
    setModalDeleteActive(false);
    setReloadData(!reloadData)
  }

  return (
    <>
      <Header filter={handlerFilter} onNewitem={() => setReloadData(!reloadData)}/>
      <CardHome 
        data={requestData}
        exclude={handleDeleteAction} 
        edit={handleEditAction}
        />

        {isModalEditActive ? <ModalEdit onSuccess={handleEdit} cancel={handleModalCancel} item={itemToEdit}/> : null}
        {isModalDeleteActive ? <ModalDelete sucess={handleSucessDelete} cancel={handleModalCancel} item={itemToExclude}/> : null}
    </>
  )
}

export default Home