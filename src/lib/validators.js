import {z} from 'zod'

export const userRegisterSchema = z.object({
    userName: z.string().min(3, 'El nombre de usuario debe tener minimo 3 caracteres').max(20),
    email: z.string().email('Por favor, ingresa un correo electrónico válido'),
    password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres').max(30, 'La contraseña no debe superar los 30 caracteres').regex(/[A-Z]/, 'Debe contener al menos una letra mayúscula').regex(/[0-9]/, 'Debe contener al menos un número'),
    confirmPassword: z.string().min(1, 'Las contraseñas no coinciden')
}).refine((data) => data.password === data.confirmPassword, {
        message: 'Las contraseñas no coinciden',
        path: ['confirmPassword']
    })

export const emailResetSchema = z.object({
    email: z.string().email('Por favor, ingresa un correo electrónico válido')
})

export const passwordResetScheme = z.object({
    password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres').max(30, 'La contraseña no debe superar los 30 caracteres').regex(/[A-Z]/, 'Debe contener al menos una letra mayúscula').regex(/[0-9]/, 'Debe contener al menos un número'),
    confirmPassword: z.string().min(1, 'Las contraseñas no coinciden')
}).refine((data) => data.password === data.confirmPassword, {
        message: 'Las contraseñas no coinciden',
        path: ['confirmPassword']
    })