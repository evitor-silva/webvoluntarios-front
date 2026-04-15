import React from 'react';
import './MeuPerfil.css';

const MeuPerfil = () => {
    return (
        <div className="perfil-container">
            <div className="perfil-box">
                <h2>Meu Perfil</h2>
                <div className="perfil-header">
                    <img src="https://via.placeholder.com/80" alt="Avatar do usuário" className="perfil-avatar" />
                    <div className="perfil-info">
                        <h3>Lucas Lima</h3>
                        <p>Email: lucas.lima@example.com</p>
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
                    <h3>Meus Serviços Cadastrados</h3>
                    <div className="servico-item">
                        <div>
                            <h4>Aulas de Matemática</h4>
                            <p>Status: Disponível</p>
                            <p>Categoria: Aulas/Educação</p>
                        </div>
                        <button>Editar</button>
                    </div>
                </div>

                <div className="avaliacoes-section">
                    <h3>Minhas Avaliações Recebidas</h3>
                    <div className="avaliacao-item">
                        <h4>Serviço: Aulas de Matemática</h4>
                        <p>Avaliação: ★★★★★ (5 estrelas)</p>
                        <p>Comentário: "Lucas foi muito prestativo e me ajudou bastante com a matéria!"</p>
                    </div>
                </div>

                <button className="back-btn">Voltar para o Dashboard</button>
            </div>
        </div>
    );
}

export default MeuPerfil;
