import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <div className="user-info">
                    <img src="https://via.placeholder.com/50" alt="Avatar" className="avatar" />
                    <div>
                        <h2>Olá, Lucas!</h2>
                        <p>Nível: Colaborador (110 Pontos)</p>
                    </div>
                </div>
                <div className="header-buttons">
                    <button>Oferecer/Solicitar Serviço</button>
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
                    <li><span>#1</span> Maria Silva <span>- 1500 pontos</span></li>
                    <li><span>#2</span> João Pedro <span>- 1200 pontos</span></li>
                    <li><span>#3</span> Lucas Lima <span>- 110 pontos</span></li>
                    <li><span>#4</span> Ana Costa <span>- 95 pontos</span></li>
                    <li><span>#5</span> Pedro Souza <span>- 80 pontos</span></li>
                </ul>
            </div>

            <div className="services-container">
                <h3>Serviços Ativos</h3>
                <div className="service-card">
                    <div>
                        <h4>Aulas de Matemática</h4>
                        <p>Status: Disponível</p>
                        <p>Oferecido por você</p>
                    </div>
                    <button>Ver Detalhes</button>
                </div>
                <div className="service-card">
                    <div>
                        <h4>Ajuda com HTML/CSS</h4>
                        <p>Status: Pendente</p>
                        <p>Solicitado por Carlos</p>
                    </div>
                    <button>Ver Detalhes</button>
                </div>
                <div className="service-card">
                    <div>
                        <h4>Pequeno reparo elétrico</h4>
                        <p>Status: Disponível</p>
                        <p>Oferecido por Ana</p>
                    </div>
                    <button>Ver Detalhes</button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
