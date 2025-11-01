import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Search } from '../components/Search'

describe('Search Component', () => {
  it('renders search input correctly', () => {
    const mockOnChange = vi.fn()

    render(<Search value="" onChange={mockOnChange} />)

    // Verifica se o input de busca aparece
    const searchInput = screen.getByPlaceholderText('Buscar ferramentas...')
    expect(searchInput).toBeInTheDocument()
  })

  it('displays the search value', () => {
    const mockOnChange = vi.fn()

    render(<Search value="React" onChange={mockOnChange} />)

    // Verifica se o valor é exibido no input
    const input = screen.getByDisplayValue('React')
    expect(input).toBeInTheDocument()
  })

  it('updates input when user types', () => {
    const mockOnChange = vi.fn()

    render(<Search value="" onChange={mockOnChange} />)

    const input = screen.getByPlaceholderText('Buscar ferramentas...')

    // Simula usuário digitando
    fireEvent.change(input, { target: { value: 'Vue' } })

    // Verifica se o valor foi atualizado no input
    expect(input).toHaveValue('Vue')
  })
})
