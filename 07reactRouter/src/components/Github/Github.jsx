import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/PragyadiptaPradhan")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
    
return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github Followers: {data.followers}
            <div className='flex flex-row'>
                    <img  src={data.avatar_url} alt='Git picture' width={300} />
                    <div className='justify-center items-center mt-25'>
                            Name: {data.name}
                            <br />
                            {data.bio}
                            <br />
                            @{data.twitter_username}
                    </div>
                    
            </div>
            
    </div>
)
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/PragyadiptaPradhan") 
    return response.json();  
}