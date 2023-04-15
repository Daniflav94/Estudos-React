import { useState } from "react"

const ManageData = () => {
    let someData = 10

    const [number, setNumber] = useState(20)

  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            {/*Dessa forma não funciona*/}
            <button onClick={() => (someData = 15)}>Mudar variável</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={()=> setNumber(25)}>Mudar o state</button>
        </div>
    </div>
  )
}

export default ManageData