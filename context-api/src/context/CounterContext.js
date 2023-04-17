import { createContext, useState } from "react";

export const CounterContext = createContext()

export const CounterContextProvider = ({children}) => {
//children encapsula elementos e continua imprimindo o conteúdo deles dentro de outro componente
    const [counter, setCounter] = useState(5)

    return (
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )
} 