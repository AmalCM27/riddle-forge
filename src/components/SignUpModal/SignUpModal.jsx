// src/components/SignUpModal.jsx
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import '../AuthModal/AuthModal.css'

const SignUpModal = ({ closeModal }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert('Registration Successful!');
            closeModal();
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="auth-modal">
            <div className="auth-modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <h2>Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUpModal;
