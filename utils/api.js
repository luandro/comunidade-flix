import 'isomorphic-fetch'

export const uploadFile = (files) => new Promise((resolve, reject) => {
  fetch('http://localhost:3005/upload', { // Your POST endpoint
    method: 'POST',
    body: files // This is your file object
  }).then(
    response => response.json() // if the response is a JSON object
  ).then(
    success => resolve(success)
  ).catch(
    error => reject(error)
  )
})

export const files = async () => {
  const data = await fetch(`http://localhost:3005/files`)
  console.log('data', data)
  const json = data.json()
  return json
}

export const file = async (id) => {
  const data = await fetch(`http://localhost:3005/file?id=${id}`)
  const json = data.json()
  return json
}