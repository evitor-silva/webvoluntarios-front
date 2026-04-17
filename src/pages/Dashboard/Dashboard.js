import React, {useEffect, useState} from 'react';
import './Dashboard.css';
import api from "../../api";
import {jwtDecode} from "jwt-decode";
import {useNavigate} from "react-router-dom";

const Dashboard = () => {
    const [findServices, setFindServices] = useState([]);
    const [findRanking, setRanking] = useState([]);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    let token = localStorage.getItem('token');


    useEffect(() => {
        if (!token) return;

        try {
            const decoded = jwtDecode(token);
            setUser(decoded);
        } catch (err) {
            console.error("Token inválido");
        }

        const fetchData = async () => {
            try {
                const [servicesRes, rankingRes] = await Promise.all([
                    api.get("/service"),
                    api.get("/ranking", {
                        headers: { Authorization: `Bearer ${token}` }
                    })
                ]);

                setFindServices(servicesRes.data?.data);
                setRanking(rankingRes.data?.data);

            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [token]);


    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <div className="user-info">
                    <img src="https://via.placeholder.com/50" alt="Avatar" className="avatar"/>
                    <div>
                        <h2>Olá, {user?.name}!</h2>
                        <p>Nível: Colaborador (110 Pontos)</p>
                    </div>
                </div>
                <div className="header-buttons">
                    <button onClick={() => navigate("/novo-servico")}>Oferecer/Solicitar Serviço</button>
                    <button>Meu Perfil</button>
                    <button>Sair</button>
                </div>
            </div>

            <div className="stats-container">
                <h3>Minhas Estatísticas</h3>
                <div className="stats-grid">
                    <div className="stat-card">
                        <h4>Pontuação Total</h4>
                        <p>110</p>
                    </div>
                    <div className="stat-card">
                        <h4>Serviços Concluídos</h4>
                        <p>1</p>
                    </div>
                    <div className="stat-card">
                        <h4>Avaliação Média</h4>
                        <p>5 Estrelas</p>
                    </div>
                    <div className="stat-card">
                        <h4>Conquistas</h4>
                        <p>3</p>
                    </div>
                </div>
            </div>

            <div className="ranking-container">
                <h3>Ranking Geral (Top 5)</h3>
                <ul className="ranking-list">
                    {findRanking.length === 0 ? (
                        <span>Nenhum ranking disponível.</span>
                    ) : (
                        findRanking.map((data, index) => (
                            <li key={index}>
                                <span>#{index + 1}</span> {data.nome} <span>- {data.pontos} pontos</span>
                            </li>
                        ))
                    )}
                </ul>
            </div>

            <div className="services-container">
                <h3>Serviços Ativos</h3>

                {Array.isArray(findServices) && findServices.map((data, index) => (
                    <div className="service-card" key={index}>
                        <div>
                            <h4>{data.titulo}</h4>
                            <p>Status: {data.status}</p>
                            <p>Oferecido por {data.usuario}</p>
                        </div>
                        <button>Ver Detalhes</button>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Dashboard;
