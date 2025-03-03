import { useState } from "react";

const Signup = ({setIsAuthenticated}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        console.log("Signup submitted with:", { name, email, phone, password, confirmPassword });
        setIsAuthenticated(true);
    }
    return(
        <div className="signup-container">
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="pass">Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="confpass">Confirm Password:</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                </div> 
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Signup;