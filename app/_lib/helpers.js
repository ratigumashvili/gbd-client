export const separator = (index, array) => index === array.length - 1 ? "" : ', '

export const checkObject = (object) => {
    if (Object.keys(object).length !== 0) {
        return object
    } else {
        return
    }
}