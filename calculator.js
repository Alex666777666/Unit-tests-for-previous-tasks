export const reverseArray = arr =>
  Array.isArray(arr) ? arr.slice().reverse() : null

export const withdraw = (clients, balances, client, amount) => {
  const indexOfClient = clients.indexOf(client)
  if (balances[indexOfClient] - amount >= 0) {
    return balances[indexOfClient] - amount
  }
  return -1
}

/* eslint-disable no-restricted-syntax */

export const getAdults = obj => {
  const newObj = {}
  for (const key in obj) {
    if (obj[key] >= 18) {
      newObj[key] = obj[key]
    }
  }
  return newObj
}
