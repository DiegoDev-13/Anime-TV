import {z} from 'zod'

//Validacion para registrar usuarios
export const userRegisterSchema = z.object({
    userName: z.string().min(3, 'El nombre de usuario debe tener minimo 3 caracteres').max(20),
    email: z.string().email('Por favor, ingresa un correo electrónico válido'),
    password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres').max(30, 'La contraseña no debe superar los 30 caracteres').regex(/[A-Z]/, 'Debe contener al menos una letra mayúscula').regex(/[0-9]/, 'Debe contener al menos un número'),
    confirmPassword: z.string().min(1, 'Las contraseñas no coinciden')
}).refine((data) => data.password === data.confirmPassword, {
        message: 'Las contraseñas no coinciden',
        path: ['confirmPassword']
    })

// Validacion para el email 
export const emailResetSchema = z.object({
    email: z.string().email('Por favor, ingresa un correo electrónico válido')
})

// Validacion para restablecer la contraseña 
export const passwordResetScheme = z.object({
    password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres').max(30, 'La contraseña no debe superar los 30 caracteres').regex(/[A-Z]/, 'Debe contener al menos una letra mayúscula').regex(/[0-9]/, 'Debe contener al menos un número'),
    confirmPassword: z.string().min(1, 'Las contraseñas no coinciden')
}).refine((data) => data.password === data.confirmPassword, {
        message: 'Las contraseñas no coinciden',
        path: ['confirmPassword']
    })

// Validacion para agregar un nuevo anime 
export const dashboardAnimeAdd = z.object({
    title: z.string().min(3, 'El titulo debe tener minimo 3 caracteres').max(35, 'El titulo debe ser maximo de 35 caracteres'),
    genders: z.array(z.string()).min(1, 'Debes seleccionar al menos un género').max(8, 'Máximo 8 géneros').nonempty('El campo géneros no puede estar vacío'),
    poster: z.string().url('Debe ser una URL válida').min(1, 'La url para la portada es requerida')
})

// Validacion para agregar una temporada a un anime 
export const dashboardAddSeasonScheme = z.object({
    title: z.string().min(3, 'El titulo debe tener minimo 3 caracteres').max(35, 'El titulo debe ser maximo de 35 caracteres'),
    numberSeason: z.number(),
    yearSeason: z.number().min(4, 'El año tiene que ser valido'),
    slugSeason: z.string().min(1, 'El slug del anime es obligatorio').regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug inválido"),
    genders: z.array(z.string()).min(1, 'Debes seleccionar al menos un género').max(8, 'Máximo 8 géneros').nonempty('El campo géneros no puede estar vacío'),
    status: z.boolean(),
    rating: z.number().min(0.1, "El rating debe ser obligatorio").max(10, 'El rating no debe pasar de 10'),
    studyAnimation: z.string().min(1, 'El estudio de animación es requerido').max(30, 'El estudio de animación no puede tener mas de 30 caracteres'),
    description: z.string().min(3, "La descripción es requerida").max(900, 'La descripción no puede tener mas de 800 caracteres'),
    poster: z.string().url('Debe ser una URL válida').min(1, 'La url para la portada es requerida'),
    banner: z.string().url('Debe ser una URL válida').min(1, 'La url para el banner es requerida')
})
