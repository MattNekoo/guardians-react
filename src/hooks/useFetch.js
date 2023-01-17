import { useState, useEffect } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null)

    //loading
    const [loading, setLoading] = useState(false)

    //erros
    const [error, setError] = useState(null)

    //post
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    const httpPost = async (data, url) => {
        // const addedGames = await res.json()
        // setGames((prevGames) => [...prevGames, addedGames]);
        setLoading(true);

        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const json = await res.json();

        setCallFetch(json);
        setLoading(false);
    };

    const httpDelete = async(data, url) => {

        const deleteUrl = `${url}/${data}`;
        console.log(deleteUrl, data)

        const res = await fetch(deleteUrl, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const json = await res.json();

        setCallFetch(json);
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url)

                const json = await res.json()

                setData(json);
            } catch (error) {
                setError("Houve um erro ao carregar os dados")
            }
            setLoading(false)
        };

        fetchData();
    }, []);

return { data, httpPost, httpDelete, loading, error };
};