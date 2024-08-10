import React from 'react';
import RepositoryTable from './components/RepositoryTable';
import RepositoryDetails from './components/RepositoryDetails';
import FilterPanel from './components/FilterPanel';
import { Provider } from 'react-redux';
import store from './features/store';
import './main.scss';

const App: React.FC = () => {
    return (
        <Provider store={store}>
        <div className="app">
            <h1>Поиск репозиториев GitHub</h1>
            <FilterPanel />
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <RepositoryTable />
            <RepositoryDetails />
            </div>
        </div>
        </Provider>
    );
};

export default App;
