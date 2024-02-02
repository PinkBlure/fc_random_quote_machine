import React, { useEffect, useState } from "react"

function useFetchData() {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const res = await fetch('https://api.quotable.io/random')
            const data = await res.json()
            console.log(data)
            setData(data)
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { data, isLoading, error, fetchData }
}

export default useFetchData