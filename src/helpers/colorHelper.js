const getRandomInt = (minArg, maxArg) => {
  const min = Math.ceil(minArg)
  const max = Math.floor(maxArg)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default class ColorHelper {
  static getRandomDarkHexCode = () => {
    const main = getRandomInt(1, 2)
    const seconday = getRandomInt(1, 5)
    const combo = `${main}${seconday}`
    return `#${combo}${combo}${combo}`
  }
}
