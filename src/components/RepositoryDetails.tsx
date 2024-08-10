import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../features/store';
import styles from '../styles/components/RepositoryDetails.module.scss';

const RepositoryDetails: React.FC = () => {
    const { selectedRepo } = useSelector((state: RootState) => state.repos);

    if (!selectedRepo) {
        return <div className={styles.empty}>Выберите репозиторий для отображения деталей</div>;
    }

    return (
        <div className={styles.details}>
            <h2>{selectedRepo.name}</h2>
            <p>{selectedRepo.description}</p>
            <p><strong>Лицензия:</strong> {selectedRepo.license?.name || 'Нет информации'}</p>
        </div>
    );
};

export default RepositoryDetails;
