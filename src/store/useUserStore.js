import { create } from "zustand";
import { supabase } from "../supabase/Client";

export const useUserStore = create((set, get) => ({
    user: null,
    session: null,
    isLoading: true,

    // Acción para cargar la sesión inicial
    initialize: async () => {
        const {data: {session}} = await supabase.auth.getSession()

        set({
            session,
            user: session?.user ?? null,
            isLoading: false
        })

        // Escucha los eventos de (Login, Logout) en tiempo real 
        supabase.auth.onAuthStateChange((_event, session) => {
            set({ session, user: session?.user ?? null})
        })

    }
}))