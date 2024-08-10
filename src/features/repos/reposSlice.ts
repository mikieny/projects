import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

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

interface ReposState {
    repos: Repo[];
    selectedRepo: Repo | null;
    sortBy: keyof Repo;
    sortOrder: 'asc' | 'desc';
    status: 'idle' | 'loading' | 'failed';
}

const initialState: ReposState = {
    repos: [],
    selectedRepo: null,
    sortBy: 'name',
    sortOrder: 'asc',
    status: 'idle',
};

// Async thunk to fetch repos from GitHub API
export const fetchRepos = createAsyncThunk(
    'repos/fetchRepos',
    async (query: string) => {
        const response = await axios.get(`https://api.github.com/search/repositories?q=${query}`);
        return response.data.items;
    }
);

const reposSlice = createSlice({
    name: 'repos',
    initialState,
    reducers: {
        setRepos(state, action: PayloadAction<Repo[]>) {
            state.repos = action.payload;
        },
        selectRepo(state, action: PayloadAction<Repo>) {
            state.selectedRepo = action.payload;
        },
        sortRepos(state, action: PayloadAction<{ key: keyof Repo; direction: 'asc' | 'desc' }>) {
            const { key, direction } = action.payload;
            state.sortBy = key;
            state.sortOrder = direction;

            state.repos.sort((a, b) => {
                const aValue = a[key];
                const bValue = b[key];

                if (aValue === undefined || bValue === undefined) return 0;

                if (aValue < bValue) return direction === 'asc' ? -1 : 1;
                if (aValue > bValue) return direction === 'asc' ? 1 : -1;
                return 0;
            });
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRepos.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchRepos.fulfilled, (state, action: PayloadAction<Repo[]>) => {
                state.status = 'idle';
                state.repos = action.payload;
            })
            .addCase(fetchRepos.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { setRepos, selectRepo, sortRepos } = reposSlice.actions;
export default reposSlice.reducer;
