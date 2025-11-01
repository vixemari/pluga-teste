import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { AppCard } from '../components/Card'
import { AppData } from '../types/app'

// Dados de exemplo para os testes
const mockApp: AppData = {
  app_id: '1',
  name: 'Slack',
  color: '#FF0000',
  icon: 'https://example.com/icon.png',
  link: 'https://example.com',
}

describe('AppCard Component', () => {
  it('renders the app name correctly', () => {
    const mockOnClick = vi.fn()

    render(<AppCard app={mockApp} onClick={mockOnClick} />)

    // Verifica se o nome do app aparece na tela
    expect(screen.getByText('Slack')).toBeInTheDocument()
  })

  it('calls onClick function when card is clicked', () => {
    const mockOnClick = vi.fn()

    render(<AppCard app={mockApp} onClick={mockOnClick} />)

    // Simula clique no card
    const card = screen.getByText('Slack').closest('div')
    if (card) {
      fireEvent.click(card)
    }

    // Verifica se a função foi chamada
    expect(mockOnClick).toHaveBeenCalledWith(mockApp)
  })
})
