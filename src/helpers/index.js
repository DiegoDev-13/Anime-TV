export const getFirstLetter = (text = '') => {

    const array = []
    const _text = text.trim()
    
    for (const l of _text ) {
      array.push(l)
    }
      
    return array[0]
}