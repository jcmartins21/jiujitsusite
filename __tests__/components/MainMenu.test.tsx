import { render, screen } from '@testing-library/react'
import MainMenu from '../../app/components/MainMenu'

// Mock do contexto de autenticação
jest.mock('../../contexts/AuthContext', () => ({
  useAuth: () => ({
    user: null,
    logout: jest.fn(),
    loading: false,
  }),
}))

describe('MainMenu', () => {
  it('renders navigation menu with basic elements', () => {
    render(<MainMenu />)
    
    expect(screen.getByText('Gama Figth')).toBeInTheDocument()
    expect(screen.getByText('home')).toBeInTheDocument()
    expect(screen.getByText('about')).toBeInTheDocument()
    expect(screen.getByText('branches')).toBeInTheDocument()
    expect(screen.getByText('store')).toBeInTheDocument()
    expect(screen.getByText('login')).toBeInTheDocument()
  })

  it('shows menu button for mobile', () => {
    render(<MainMenu />)
    
    expect(screen.getByLabelText('menu')).toBeInTheDocument()
  })
}) 