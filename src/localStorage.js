export const loadState = () => {
  try {
    let serializedState = window.localStorage.getItem("state");
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch{
    return undefined
  }
}


export const saveState = (state) => {
  try {
    window.localStorage.setItem("state", JSON.stringify(state))
  } catch{
    // log error
  }
}