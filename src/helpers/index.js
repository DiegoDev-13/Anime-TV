export const getFirstLetter = (text = '') => {

    const array = []
    const _text = text.trim()
    
    for (const l of _text ) {
      array.push(l)
    }
      
    return array[0]
}

//Funcion para formatear la fecha y devolver hace cuanto fue publicado el comentario
export const formatDateAgo = (date) => {
    const now = new Date()
    const commentDate = new Date(date)
    const diffTiime = now.getTime() - commentDate.getTime()

    const diffSeconds = Math.floor(diffTiime / 1000)

    const diffminutes = Math.floor(diffSeconds / 60)

    const diffHours = Math.floor(diffminutes / 60)  

    const diffDays = Math.floor(diffHours / 24)

    const diffWeeks = Math.floor(diffDays / 7)

    if(diffminutes < 60) {
      return `Hace ${diffminutes} minuto${diffminutes > 1 ? 's' : ''}`
    }

    if(diffHours < 24) {
      return `Hace ${diffHours} hora${diffHours > 1 ? 's' : ''}`
    }

    if(diffDays <= 6) {
      return `Hace ${diffDays} día${diffDays > 1 ? 's' : ''}`
    }

    if(diffDays > 7) {
      return `Hace ${diffWeeks} semana${diffWeeks > 1 ? 's' : ''}`
    }
}