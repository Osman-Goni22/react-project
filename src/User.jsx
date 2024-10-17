import './User.css'
export default function User({user}){
    console.log(user);
    return(
        <div className="box">
            <h4>Email:{user.firstname}</h4>
           
            <p>Name:{user.email}</p>
        </div>
    )
}