import { useEffect, useState } from "react";

const useFetch = (url, defaultValue) => {
    const [data, setData] = useState(defaultValue);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(result => {
                setData(Object.values(result));
            })
    }, [url]);

    return [data, setData];
}

export default useFetch;