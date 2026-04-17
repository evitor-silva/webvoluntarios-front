import React, {useEffect, useState} from 'react';
import './NovoServico.css';
import api from "../../api";
import {jwtDecode} from "jwt-decode";

const NovoServico = () => {
    const [findCategory, setCategory] = useState([]);
    const [tipoServico, setTipoServico] = useState("");
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoriaSelecionada] = useState("");
    const [descricao, setDescricao] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [categoryRes] = await Promise.all([
                    api.get("/category")
                ]);
                setCategory(categoryRes.data?.data || []);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    function onSubmit(e) {
        e.preventDefault();
        let token = localStorage.getItem('token');
        const decoded = jwtDecode(token);

        const payload = {
            categorias_id: categoria,
            proprietario_usuario_id: decoded?.user,
            titulo: titulo,
            descricao: descricao,
            status: "Disponivel"
        };

        api.post("/service",
            payload,
            {
                headers: {Authorization: `Bearer ${token}`}
            }
        );
    }

    return (
        <div className="novo-servico-container">
            <div className="novo-servico-box">
                <h2>Oferecer ou Solicitar um Serviço</h2>
                <p>Preencha os campos abaixo para divulgar um serviço ou solicitar ajuda.</p>
                <form onSubmit={onSubmit}>
                    <div className="input-group">
                        <label htmlFor="tipo-servico">Tipo de Serviço:</label>
                        <select
                            id="tipo-servico"
                            value={tipoServico}
                            onChange={(e) => setTipoServico(e.target.value)}
                        >
                            <option value="">Selecione...</option>
                            <option value="Oferecer">Oferecer</option>
                            <option value="Solicitar">Solicitar</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <label htmlFor="titulo">Título do Serviço:</label>
                        <input
                            type="text"
                            id="titulo"
                            placeholder="Ex: Aulas de Matemática, Reparo de Computador"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="categoria">Categoria:</label>
                        <select
                            id="categoria"
                            name="categoria"
                            value={categoria}
                            onChange={(e) => setCategoriaSelecionada(e.target.value)}
                        >
                            <option value="">Selecione a categoria...</option>
                            {findCategory.map((data) => (
                                <option key={data.id} value={data.id}>
                                    {data.nome}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="input-group">
                        <label htmlFor="descricao">Descrição Detalhada:</label>
                        <textarea
                            id="descricao"
                            rows="5"
                            placeholder="Descreva o serviço que você oferece ou a ajuda que precisa (detalhes, requisitos, horários, etc.)"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="form-buttons">
                        <button type="submit" className="publish-btn">Publicar Serviço</button>
                        <button type="button" className="dashboard-btn">Voltar para o Dashboard</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NovoServico;
