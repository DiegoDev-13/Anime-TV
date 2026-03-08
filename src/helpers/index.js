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

//Funcion para formater la fecha y devolver la fecha en formato correcto
export const formatDate = (date) => {
  let dateMonth = new Date(date)
  let dateFormat = new Date(date)

  switch (dateMonth.getMonth()) {
    case 0:
      dateMonth = 'Ene'
      break
    case 1:
      dateMonth = 'Feb'
      break
    case 2:
      dateMonth = 'Mar'
      break
    case 3:
      dateMonth = 'Abr'
      break
    case 4:
      dateMonth = 'May'
      break
    case 5:
      dateMonth = 'Jun'
      break
    case 6:
      dateMonth = 'jul'
      break
    case 7:
      dateMonth = 'Ago'
      break
    case 8:
      dateMonth = 'Sep'
      break
    case 9:
      dateMonth = 'Oct'
      break
    case 10:
      dateMonth = 'Nov'
      break
    case 12:
      dateMonth = 'Dic'
      break
  
    default:
      dateMonth = new Date(date)
      break;
  }
  
  return `${dateMonth} ${dateFormat.getDate()}, ${dateFormat.getFullYear()}`

}

//Funcion para dar el porcentaje de crecimiento de los usuarios respecto al mes anterior
export const getGrowthPercentageUsers = (array) => {

//   const array = [
//     {
//         "mes": "Nov 2025",
//         "total_users": 0
//     },
//     {
//         "mes": "Dec 2025",
//         "total_users": 0
//     },
//     {
//         "mes": "Jan 2026",
//         "total_users": 0
//     },
//     {
//         "mes": "Feb 2026",
//         "total_users": 0
//     },
//     {
//         "mes": "Mar 2026",
//         "total_users": 3
//     }
// ]


  if(array[3].total_users > 0) {
    const result = ((array[4].total_users - array[3].total_users) / array[3].total_users)  * 100
    return result
  } else {
    return 0
  }

}

