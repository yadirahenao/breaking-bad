const ENDPOINT = 'https://localhost:8000'

export default async function login ({ username, password }) {
  const res = await fetch(`${ENDPOINT}/login`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  })
  if (!res.ok)
    throw new Error('Response is NOT ok')
  const res_2 = await res.json()
  const { jwt } = res_2
  return jwt
}