import { useState } from "react";


function Signup(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="signup">
            <h1>Signup</h1>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Username"
                onChange={(e) => setUsername(e.target.value)} />
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Email" 
                onChange={(e) => setEmail(e.target.value)}  />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" 
                onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button type="submit">Signup</button>
            </form>
            <p>Already have an account? <a href="/login">Login</a></p>
        </div>
    )
}
export default Signup