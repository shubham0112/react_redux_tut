import React from 'react'
import {useDispatch} from "react-redux"
import {login,logout} from "../features/user"

function Login() {
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={()=>
                {
                    dispatch(login({
                        name:"Shubham",age:21,email:"shubham@gmail.com"}
                    ))
                }
            } >Login</button>

            <button onClick={()=>
                {
                    dispatch(logout({
                        name:"Shubham",age:21,email:"shubham@gmail.com"}
                    ))
                }
            } >logout</button>
        </div>
    )
}

export default Login
