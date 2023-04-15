import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(true)

    const [name, setName] = useState("Felipe")

    return (
        <div>
            <h2>Isso será exibido?</h2>
            {x && <p>Se x for true, sim!</p>}
            {name === "Bob" ? (
                <div>
                    <p>O nome é {name}</p>
                </div>
            ) : (
                <div>
                    <p>Nome {name} não encontrado!</p>
                </div>
            )}
            <button onClick={() => setName("Bob")}>Mudar nome</button>
        </div>
    )
}

export default ConditionalRender