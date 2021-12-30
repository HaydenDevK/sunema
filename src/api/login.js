const user = [
  {
    id: 'sophie@sophie.com',
    name: 'sophie'
  }
]

export function login (id) {
  return user.find(ele => {
    setTimeout(() => {
      return ele.id === id
    }, 1000)
  })
}
