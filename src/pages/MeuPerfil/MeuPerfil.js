import React, {useState, useEffect, useCallback} from 'react';
import './MeuPerfil.css';
import {useNavigate} from "react-router-dom";
import api from "../../api";

const MeuPerfil = () => {
    const navigate = useNavigate();
    const [userData, setUser] = useState(null);
    let token = localStorage.getItem('token');

    const fetchUserData = useCallback(() => {
        api("/profile", {
            headers: {Authorization: `Bearer ${token}`}
        }).then((data) => {
            setUser(data.data);
        }).catch(err => console.error(err));
    }, [token])

    useEffect(() => {
        fetchUserData();
    }, [fetchUserData]);

    return (
        <div className="perfil-container">
            <div className="perfil-box">
                <h2>Meu Perfil</h2>
                <div className="perfil-header">
                    <img src="https://via.placeholder.com/80" alt="Avatar do usuário" className="perfil-avatar"/>
                    <div className="perfil-info">
                        <h3>{userData?.name}</h3>
                        <p>Email: {userData?.email}</p>
                        <p>Nível: Colaborador</p>
                        <p>Pontuação Total: 110 pontos</p>
                    </div>
                </div>

                <div className="conquistas-section">
                    <h3>Minhas Conquistas</h3>
                    <ul>
                        <li>Primeiro Serviço - Concluiu seu primeiro serviço!</li>
                        <li>Estrela da Comunidade - Recebeu uma avaliação 5 estrelas!</li>
                        <li>Bem-vindo à comunidade! - Por se cadastrar na plataforma!</li>
                    </ul>
                </div>

                <div className="servicos-section">
                    {userData?.Servicos.map((servico) => (
                        <div className="servico-item" key={servico.id}>
                            <div>
                                <h4>{servico.titulo}</h4>
                                <p>Status: {servico.status}</p>

                                <p>Categoria: {servico.Category?.nome || 'Sem Categoria'}</p>
                            </div>
                            <button >Editar</button>
                        </div>
                    ))}
                </div>

                <div className="avaliacoes-section">
                    <h3>Minhas Avaliações Recebidas</h3>
                    <div className="avaliacao-item">
                        <h4>Serviço: Aulas de Matemática</h4>
                        <p>Avaliação: ★★★★★ (5 estrelas)</p>
                        <p>Comentário: "Lucas foi muito prestativo e me ajudou bastante com a matéria!"</p>
                    </div>
                </div>

                <button className="back-btn" onClick={() => navigate("/dashboard")}>Voltar para o Dashboard</button>
            </div>
        </div>
    );
}

export default MeuPerfil;
