import React from 'react'

const Login = () => {
    return (
        <div className ="form-container">
            <div className ="form-wrapper">
                <span className = "brand">TangTalks</span>
                <span className = "title">Login</span>
                <form>
                    <input type="text" placeholder = "username"/>
                    <input type="password" placeholder = "password"/>
                    <button>Log Inp</button>
                </form>
                <p>Don't Have An Account? Register</p>
            </div>
        </div>
    )
}

export default Login;