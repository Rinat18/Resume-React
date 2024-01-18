import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API } from '../helpers/Const'
import { useParams } from 'react-router-dom'

const CardsDetail = () => {
    const {id} = useParams()
    const [cardsid, setCardsid] = useState('');
    const getCardsId = async() => {
        const {data} = await axios(`${API}/${id}`)
        setCardsid(data)
    }
    useEffect(()=> {
        getCardsId()
    },[id])

  return (
    <div className='body'>
        <div className="content">
            <div className="titleAPI">CHARACTER DETAIL</div>
            <div className="cardDetail">
                <img className='cardDetailImg' src={cardsid.image} alt="" />
                <div className="cardDetailDescription">
                    <div className='detailName'>Имя: {cardsid.name}</div>
                    <div className='detailStatus'> Статус: {cardsid.status}</div>
                    <div className='detailSPecies'>Кто по жизни: {cardsid.species}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardsDetail
