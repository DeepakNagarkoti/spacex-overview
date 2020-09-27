export const getParamsData = (val) => {
  return val.substring(val.indexOf("=") + 1)
}
