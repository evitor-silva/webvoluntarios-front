import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://${process.env.API_URL}:3333/login`, { email, password });
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                navigate('/dashboard');
            }
        } catch (error) {
            console.error('Erro no login:', error);
            alert('Email ou senha inválidos.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Bem-vindo à Plataforma de Serviços Voluntários</h1>
                <div className="button-container">
                    <button className="login-btn-active">Fazer Login</button>
                    <button className="register-btn" onClick={() => navigate('/cadastro')}>Cadastrar-se</button>
                </div>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="senha">Senha:</label>
                        <input 
                            type="password" 
                            id="senha" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <button type="submit" className="submit-btn">Entrar</button>
                </form>
                <p>Não tem uma conta? <a href="/cadastro">Cadastre-se aqui</a></p>
            </div>
        </div>
    );
}

export default Login;
