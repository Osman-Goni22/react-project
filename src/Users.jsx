import { useEffect, useState } from "react";
import User from "./User";
export default function(){
    const [Users,setUsers]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.org/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])

    return(
        <div>
            <h3>{Users.length}</h3>
            {
                Users.map(user=><User user={user} key={user.id}></User>)
            }
        </div>
    )
}