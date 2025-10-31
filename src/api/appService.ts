import axios from 'axios'

const API_URL = 'https://pluga.co/ferramentas_search.json'

export const fetchApps = async () => {
  try {
    const response = await axios.get(API_URL)
    return response.data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Erro ao buscar ferramentas:', error)
    throw new Error('Não foi possível carregar a lista de ferramentas.')
  }
}
