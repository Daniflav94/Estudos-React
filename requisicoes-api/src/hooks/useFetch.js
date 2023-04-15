import {useState, useEffect} from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const [id, setId] = useState(null)

    const httpConfig = (data, method) => {
        if(method === "POST"){
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })

            setMethod(method)
        }else if(method === "DELETE"){
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
            })
            setMethod(method)
            setId(data)
        }
    }

    useEffect(() => {
        const fetchData = async () => {

            setLoading(true)

            try {
                const res = await fetch(url)
                const json = await res.json()

                setData(json)
            } catch (error) {
                setError("Erro ao carregar os dados")
                console.log(error.message)
            }

            setLoading(false)
        }

        fetchData()

    }, [url, callFetch])

    // POST E DELETE
    useEffect(() => {
        const httpRequest = async () => {
            let json

            if(method === "POST"){
                let fetchOptions = [url, config]
    
                const res = await fetch(...fetchOptions)
    
                json = await res.json()
    
            }else if(method === "DELETE"){
                const deleteURL = `${url}/${id}`

                const res = await fetch(deleteURL, config)

                json = await res.json()               
            }

            setCallFetch(json)
        }
        httpRequest()
    }, [config, method, url, id])



    return { data, httpConfig, loading, error }
}