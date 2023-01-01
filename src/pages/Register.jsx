import React from 'react'

const Register = () => {
    return (
        <div className ="form-container">
            <div className ="form-wrapper">
                <span className = "brand">TangTalks</span>
                <span className = "title">Register</span>
                <form>
                    <input type="text" placeholder = "username"/>
                    <input type="email" placeholder = "email"/>
                    <input type="password" placeholder = "password"/>
                    <input type="password" placeholder = "confirm password"/>
                    <button>Sign Up</button>
                </form>
                <p>Already Have An Account? Login</p>
            </div>
        </div>
    )
}

export default Register;