import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

    // const [data, setData] = useState(null)
    // useEffect(() => {
    //     fetch('https://api.github.com/users/pandurang-mane')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

    const data = useLoaderData();

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github Profile :
            <img src={data.avatar_url} width={300} alt="" />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/pandurang-mane")
    return response.json();
}