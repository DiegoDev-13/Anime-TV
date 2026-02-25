import { create } from 'zustand'

export const useGlobalStore = create((set, get) => ({
    // Store Mobile 
    activeMobile: false,
    setActiveMobile: () => set((state) => ({activeMobile: !state.activeMobile})),

    //Search 
    activeSheetSearch: false,
    setActiveSheetSearch: (state) => set({activeSheetSearch: state}),

    //Profile Sheet
    activeProfileSheet: false,
    setActiveProfileSheet: (state) => set({activeProfileSheet: state}),

    //State de modalProdile
    activeModalProfile: false,
    setActiveModalProfile: (state) => set({activeModalProfile: state}),

    //Store de si se envio el resetEmail
    isSendResetEmail: false,
    setIsSendResetEmail: (state) => set({isSendResetEmail: state}),

    //Store de si ya se cambio la contraseña
    isUpdatePassword: false,
    setIsUpdatePassword: (state) => set({isUpdatePassword: state})
}))