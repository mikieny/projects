import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../features/store';
import { selectRepo, sortRepos } from '../features/repos/reposSlice';
import styles from '../styles/components/RepositoryTable.module.scss';

interface Repo {
    id: number;
    name: string;
    language: string;
    forks_count: number;
    stargazers_count: number;
    updated_at: string;
    description?: string;
    license?: {
        name: string;
    };
}

const RepositoryTable: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { repos, sortBy, sortOrder } = useSelector((state: RootState) => state.repos);
    const [sortConfig, setSortConfig] = useState<{ key: keyof Repo; direction: 'asc' | 'desc' }>({ key: sortBy as keyof Repo, direction: sortOrder as 'asc' | 'desc' });

    const handleSort = (key: keyof Repo) => {
        const direction = sortConfig.direction === 'asc' ? 'desc' : 'asc';
        setSortConfig({ key, direction });
        dispatch(sortRepos({ key, direction }));
    };

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th className={styles.sortable} onClick={() => handleSort('name')}>Название {sortConfig.key === 'name' ? (sortConfig.direction === 'asc' ? '🔽' : '🔼') : ''}</th>
                    <th className={styles.sortable} onClick={() => handleSort('language')}>Язык {sortConfig.key === 'language' ? (sortConfig.direction === 'asc' ? '🔽' : '🔼') : ''}</th>
                    <th className={styles.sortable} onClick={() => handleSort('forks_count')}>Форки {sortConfig.key === 'forks_count' ? (sortConfig.direction === 'asc' ? '🔽' : '🔼') : ''}</th>
                    <th className={styles.sortable} onClick={() => handleSort('stargazers_count')}>Звёзды {sortConfig.key === 'stargazers_count' ? (sortConfig.direction === 'asc' ? '🔽' : '🔼') : ''}</th>
                    <th className={styles.sortable} onClick={() => handleSort('updated_at')}>Дата обновления {sortConfig.key === 'updated_at' ? (sortConfig.direction === 'asc' ? '🔽' : '🔼') : ''}</th>
                </tr>
            </thead>
            <tbody>
                {repos.map((repo) => (
                    <tr key={repo.id} onClick={() => dispatch(selectRepo(repo))}>
                        <td>{repo.name}</td>
                        <td>{repo.language}</td>
                        <td>{repo.forks_count}</td>
                        <td>{repo.stargazers_count}</td>
                        <td>{new Date(repo.updated_at).toLocaleDateString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default RepositoryTable;
