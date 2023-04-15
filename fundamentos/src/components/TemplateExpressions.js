const TemplateExpressions = () => {
    const name = "Daniele"
    const data = {
        idade: 28,
        profissao: "Programador"
    }

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como {data.profissao}</p>
            
        </div>
    )
}

export default TemplateExpressions