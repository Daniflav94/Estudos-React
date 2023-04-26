import { db } from "../firebase/config"

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from 'firebase/auth'

import {useState, useEffect} from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    //cleanup
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth() //possibilita usar funções de autenticação do firebase

    function checkIfIsCancelled() {
        //essa função vai evitar o vazamento de memória
        if(cancelled){
            return
        }
    }

    const createUser = async (data) => {
        checkIfIsCancelled()

        setLoading(true)
        setError(null)

        try {
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {displayName: data.displayName})

            setLoading(false)

            return user

        } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage

            if(error.message.includes("password")){
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres."
            } else if(error.message.includes("email-already")){
                systemErrorMessage = "E-mail já cadastrado."
            } else {
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde."
            }

            setLoading(false)            
            setError(systemErrorMessage)
        } 
    }

    const login = async(data) => { 
        //async e await vai possibilitar esperar o usuário se autenticar (resposta) para executar qualquer ação
        checkIfIsCancelled()

        setLoading(true)
        setError(null)

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
            
            setLoading(false)

        } catch (error) {
            let systemErrorMessage

            if(error.message.includes("user-not-found")){
                systemErrorMessage = "Usuário não encontrado"
            } else if(error.message.includes("wrond-password")){
                systemErrorMessage = "Senha incorreta."
            } else {
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde."
            }

            setLoading(false)            
            setError(systemErrorMessage)
        }
    }

    const logout = () => {
        checkIfIsCancelled()
        signOut(auth)
    }
        

    //vai setar o cancelled para true quando sair da página
    useEffect(() => {
        return () => setCancelled(true)
    }, []) //array vazia executa uma única vez

    return{
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    }
}