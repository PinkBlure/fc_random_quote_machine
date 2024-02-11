import React, { useEffect, useState } from "react"
import axios from "axios";

function useFetchData() {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await axios.get('https://api.quotable.io/random');
            setData(response.data);
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