const Events = () => {
    const handleMyEvent = (e) => {
        console.log("Ativou o evento")
    }

    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando isso</h1>
        }else {
            return <h1>Renderizando também</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou")}>Clique</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events