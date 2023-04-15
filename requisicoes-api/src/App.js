/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import './App.css';
import { useFetch } from './hooks/useFetch';
import lixeira from "./assets/lixeira-de-reciclagem (3).png"

const url = "http://localhost:3000/products"

function App() {

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const { data: items, httpConfig, loading, error } = useFetch(url) //importa os dados do hook customizado


  const handleSubmit = async (e) => {
    e.preventDefault() // para não submeter o form do jeito tradicional

    const product = { // como os states tem os mesmos nomes das chaves do obj, não é necessário escreve name: name...
      name,
      price
    }

    /* const res = await fetch(url, {
      method: "POST",
      headers: { //os headers transmite o tipo de conteúdo a ser enviado
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product) //vai transformar o obj em formato JSON
    })

    //carregamento dinâmico
    const addedProduct = await res.json() //guarda o retorno da requisição post, que é o produto criado
    setProducts((prevProducts) => [...prevProducts, addedProduct])
 */

    httpConfig(product, "POST")
    setName('')
    setPrice('')
  }

  const deletarProduto = (id) => {

    httpConfig(id, "DELETE")
  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
        {items && items.map((prod) => ( //validação para fazer o map se items não for null
          <li key={prod.id}>
            {prod.name} - R$ {prod.price} 
            <button onClick={() => deletarProduto(prod.id)}><img src={lixeira} alt="lixeira" /></button>
          </li>
        ))}
      </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name='name' onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço:
            <input type="number" value={price} name='price' onChange={(e) => setPrice(e.target.value)} />
          </label>
          {loading && <input type="submit" disabled value="Criando..." />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
