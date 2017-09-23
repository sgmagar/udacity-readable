const headers = { headers: { 'Authorization': 'whatever-you-want' }}
const base_url = 'http://localhost:3001'

export const getCategories = () => {
	return fetch(
		`${base_url}/categories`, headers
	)
		.then(res => res.json())
}