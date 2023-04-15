import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

const Product = () => {

    const { id } = useParams() 

    const url = 'http://localhost:3000/products/' + id
    const {data: product, loading, error} = useFetch(url)

  return (
    <div>
        <p>ID do produto: {id}</p>
        {error && <p>Ocorreu um erro ao carregar o produto</p>}
        {loading && <p>Carregando</p>}
        {product && (
            <div>
                <h2>{product.name}</h2>
                <p>R$ {product.price}</p>
                <Link to={`/products/${product.id}/info`}>Mais informações</Link>
            </div>        
        )}
    </div>
  )
}

export default Product