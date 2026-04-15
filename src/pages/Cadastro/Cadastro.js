import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Cadastro.css';

const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const navigate = useNavigate();

    const handleCadastro = async (e) => {
        e.preventDefault();
        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem.');
            return;
        }
        try {
            await axios.post('/auth/register', { name: nome, email, password: senha });
            alert('Cadastro realizado com sucesso!');
            navigate('/login');
        } catch (error) {
            console.error('Erro no cadastro:', error);
            if (error.response && error.response.status === 409) {
                alert('Este e-mail já está em uso. Por favor, tente outro.');
            } else {
                alert('Erro ao realizar o cadastro. Tente novamente mais tarde.');
            }
        }
    };

    return (
        <div className="cadastro-container">
            <div className="cadastro-box">
                <h1>Bem-vindo à Plataforma de Serviços Voluntários</h1>
                <div className="button-container">
                    <button className="login-btn" onClick={() => navigate('/login')}>Fazer Login</button>
                    <button className="register-btn-active">Cadastrar-se</button>
                </div>
                <h2>Cadastro</h2>
                <form onSubmit={handleCadastro}>
                    <div className="input-group">
                        <label htmlFor="nome">Nome Completo:</label>
                        <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmar-senha">Confirmar Senha:</label>
                        <input type="password" id="confirmar-senha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} required />
                    </div>
                    <button type="submit" className="submit-btn">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default Cadastro;
