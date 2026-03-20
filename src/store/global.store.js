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
    setIsUpdatePassword: (state) => set({isUpdatePassword: state}),

    //State de ModalAddNewAnime
    activeModalNewAnime: false,
    setActiveModalNewAnime: (state) => set({activeModalNewAnime: state}),

    //State de ModalConfimDelete
    ativeModalConfirmDelete: false,
    setAtiveModalConfirmDelete: (state) => set({ativeModalConfirmDelete: state}),

    //description modal delete
    descriptionModalDelete: null,
    setDescriptionModalDelete: (state) => set({descriptionModalDelete: state}),

    //Revice el id cual se borrara
    idDelete: null,
    setIdDelete: (state) => set({idDelete: state}),

    //setea cual mutate se usara En le modal de liminarcion de anime o season
    useMutate: null,
    setMutate: (state) => set({useMutate: state}),

     //Stare para la parte de editAnime
    activeModalEditAnime: false,
    setActiveModalEditAnime: (state) => set({activeModalEditAnime: state}),

    animeEdit: null,
    setAnimeEdit: (state) => set({animeEdit: state}),
})) 