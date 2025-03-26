import { useEffect, useState } from "react";

export default function UseFetch({ url, options = {} }) {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);

    async function fetchData() {
        setPending(true);
        try {
            const res = await fetch(url, { ...options }); // Use the dynamic `url` parameter

            if (!res.ok) throw new Error(res.statusText);

            const jsonData = await res.json();
            setData(jsonData);
            setError(null);
        } catch (error) {
            setError(error.message);
            console.error(error);
        } finally {
            setPending(false);
        }
    }

    useEffect(() => {
        fetchData(); // Fetch data whenever `url` changes
    }, [url]);

    return { data, error, pending };
}