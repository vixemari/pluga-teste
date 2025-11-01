import { describe, it, expect, vi } from 'vitest'
import axios from 'axios'
import { fetchApps } from '../api/appService'

// Simula o axios para os testes
vi.mock('axios')
const mockedAxios = vi.mocked(axios)

describe('API Service', () => {
  it('fetches apps successfully', async () => {
    // Dados de exemplo que a API deveria retornar
    const mockApps = [
      {
        app_id: '1',
        name: 'Slack',
        color: '#FF0000',
        icon: 'slack.png',
        link: 'https://slack.com',
      },
    ]

    // Simula uma resposta bem-sucedida da API
    vi.mocked(mockedAxios.get).mockResolvedValue({ data: mockApps })

    // Chama a função e verifica o resultado
    const result = await fetchApps()
    expect(result).toEqual(mockApps)
  })
})
