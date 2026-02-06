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
}))