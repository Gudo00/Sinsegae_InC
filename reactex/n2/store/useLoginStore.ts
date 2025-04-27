import { create } from 'zustand';

interface LoginStore {
    mid: string;
    accessToken: string;
    refreshToken: string;
    save: (mid: string, accessToken: string|undefined, refreshToken: string|undefined) => void;
}



export const useLoginStore = create<LoginStore>()((set) => ({
    mid: '',
    accessToken: '',
    refreshToken: '',

    save: (mid, accessToken, refreshToken) => {
        set({ mid, accessToken, refreshToken });
    },
}));