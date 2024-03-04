import { Link,useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"


function Login() {
    const  [username, setUserName] = useState()
    const  [email, setEmail] = useState()
    const  [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://crazy-tuna-garters.cyclic.app/signup',{username, email,password})
        .then((result)=>{
            console.log(result)
            navigate('/login')
        })
        .catch((err)=>console.log(err))
    }
    
    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-50  ">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input 
                            placeholder="Enter Name"
                            type="text"
                            autoComplete="off"
                            name="name"
                            className="form-control rounded-0" 
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input 
                            placeholder="Enter Email"
                            type="email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0" 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input 
                            placeholder="Enter Password"
                            type="password"
                            autoComplete="off"
                            name="password"
                            className="form-control rounded-0" 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0 ">
                        Register
                    </button>
                </form>

                <p>Already have an account?</p>
                <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Login
                </Link>
                
            </div>        
        </div>
    )
}

export default Login