export const prependZero = (num: number | undefined) => {
  if (num === undefined) return
  if (num < 10) {
    return `0${num}`
  }
  return num
}
