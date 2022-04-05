import { render, screen } from "@testing-library/react"
import App from './App'
import userEvent from '@testing-library/user-event' 

test("header renders with correct text", () => {
  render(<App />)
  const headerEl = screen.getByRole("heading")
  expect(headerEl.textContent).toBe("Testing Playground")
})

 test("button changes color when clicked", () => {
  render(<App />)
  const colorBtn = screen.getByRole("button")

  userEvent.click(colorBtn)

  expect(colorBtn).toHaveStyle({ backgroundColor: "blue" })
  expect(colorBtn.textContent).toBe("Change button color to green")
})

test("checkbox disables button when first clicked, then enables button on second click", () => {
  render(<App />)
  const colorBtn = screen.getByRole("button")
  const checkbox = screen.getByRole("checkbox")

  userEvent.click(checkbox)
  expect(colorBtn).toBeDisabled()

  userEvent.click(checkbox)
  expect(colorBtn).toBeEnabled()
})


test("checkbox shows message button disabled on first click and changes message to button enable on second click", () => {
  render(<App />)
  const checkbox = screen.getByRole("checkbox")
  const paragraphEl = screen.getByRole("paragraph")

  expect(paragraphEl.textContent).toBe("Button is enabled")

  userEvent.click(checkbox)
  expect(paragraphEl.textContent).toBe("Button is disabled")

  userEvent.click(checkbox)
  expect(paragraphEl.textContent).toBe("Button is enabled")
})