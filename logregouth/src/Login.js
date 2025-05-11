import { useState } from 'react';


function Login(){
    return (
        <div className="login">
            <h1>Login</h1>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Username" />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" />
                <br />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="/signup">Signup</a></p>
        </div>
    )
}
export default Login;
