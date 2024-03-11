import { useEffect, useState } from "react"

export default function User(){
    const [user, setUser] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])
    return(
        <div>
         <h3>User {user.length}</h3>{
         
         }
        </div>
    )
}
/**
 * 1.declare a state to hold the data
 * 2.useEffect with calback and dependecy 
 * 3.use fetch to load data
 */