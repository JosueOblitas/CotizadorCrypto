import React from 'react'
import styled from '@emotion/styled'

const Resultados = styled.div`
  color:white;
  font-family: 'Lato',sans-serif;

  display: flex;
  align-items: center;
  gap: 1rem;
`

const Texto = styled.p`
  font-size: 18px;
  span{
    font-weight: 700;
  }
`
const Precio = styled.p`
  font-size: 22px;
  span{
    font-weight: 700;
  }
`
const Imagen = styled.img`
  display: block;
  width: 120px;
`;
const Resultado = ({resultado}) => {
  const {PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE} =resultado;
  return (
    <Resultados>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen-cripto"/>
        <div>
        <Precio>El Precio es de: <spam>{PRICE}</spam></Precio>
      <Texto>Precio más alto del día: <spam>{HIGHDAY}</spam></Texto>
      <Texto>Precio más bajo del día: <spam>{LOWDAY}</spam></Texto>
      <Texto>Variación últimas 24 horas: <spam>{CHANGEPCT24HOUR}</spam></Texto>
      <Texto>Ultima Actualización: <spam>{LASTUPDATE}</spam></Texto>
        </div>
    </Resultados>
  )
}

export default Resultado