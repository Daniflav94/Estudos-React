import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchForm = () => {
    const navigate = useNavigate()
    const [query, setQuery] = useState() //busca

    const handleSubmit = (e) => {
        e.preventDefault() // não recarregar a página quando o btn submit for clicado
        
        navigate("/search?q=" + query)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <input type="submit" value="Buscar" />
    </form>
  )
}

export default SearchForm