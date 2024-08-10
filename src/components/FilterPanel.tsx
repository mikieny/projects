import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRepos } from '../features/repos/reposSlice';
import styles from '../styles/components/FilterPanel.module.scss';
import { AppDispatch } from '../features/store'; // Убедитесь, что AppDispatch используется

const FilterPanel: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        dispatch(fetchRepos(query));
    };

    return (
        <div className={styles.filterPanel}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Поиск..."
            />
            <button onClick={handleSearch}>Поиск</button>
        </div>
    );
};

export default FilterPanel;
