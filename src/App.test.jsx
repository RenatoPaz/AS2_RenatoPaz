import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import '@testing-library/jest-dom/vitest'
import App from './App'

test('shows my name on the page', () => {
  render(<App />)
  expect(screen.getByText('Renato Gomes da Paz')).toBeInTheDocument()
})