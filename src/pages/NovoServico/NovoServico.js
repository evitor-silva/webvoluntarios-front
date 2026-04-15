import React from 'react';
import './NovoServico.css';

const NovoServico = () => {
    return (
        <div className="novo-servico-container">
            <div className="novo-servico-box">
                <h2>Oferecer ou Solicitar um Serviço</h2>
                <p>Preencha os campos abaixo para divulgar um serviço ou solicitar ajuda.</p>
                <form>
                    <div className="input-group">
                        <label htmlFor="tipo-servico">Tipo de Serviço:</label>
                        <select id="tipo-servico">
                            <option>Selecione...</option>
                            <option>Oferecer</option>
                            <option>Solicitar</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="titulo">Título do Serviço:</label>
                        <input type="text" id="titulo" placeholder="Ex: Aulas de Matemática, Reparo de Computador" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="categoria">Categoria:</label>
                        <select id="categoria">
                            <option>Selecione a categoria...</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="descricao">Descrição Detalhada:</label>
                        <textarea id="descricao" rows="5" placeholder="Descreva o serviço que você oferece ou a ajuda que precisa (detalhes, requisitos, horários, etc.)"></textarea>
                    </div>
                    <div className="form-buttons">
                        <button type="submit" className="publish-btn">Publicar Serviço</button>
                        <button type="button" className="dashboard-btn">Voltar para o Dashboard</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NovoServico;
