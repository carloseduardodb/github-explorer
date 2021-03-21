/* eslint-disable camelcase */
import React, { useState, FormEvent } from 'react';

import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}
const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>([]);

    async function handleAddRepository(
        event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
        event.preventDefault();

        const response = await api.get<Repository>(`repos/${newRepo}`);

        const repository = response.data;

        setRepositories([...repositories, repository]);

        setNewRepo('');
    }

    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no GitHub</Title>

            <Form onSubmit={handleAddRepository}>
                <input
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                    placeholder="Digite o nome do repositorio"
                    type="text"
                />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                {repositories.map((repository) => (
                    <a key={repository.full_name} href="Repository">
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <div>
                            <h3>{repository.full_name}</h3>
                            <p>{repository.description}</p>
                        </div>
                        <FiChevronRight size={20} />
                    </a>
                ))}
            </Repositories>
        </>
    );
};

export default Dashboard;