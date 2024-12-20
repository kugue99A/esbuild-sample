import type { JSX, ReactNode } from 'react'
import './index.css'

type ButtonProps = {
  children: ReactNode
  onClick: () => void
}

const Button = ({ children, onClick }: ButtonProps): JSX.Element => {
  return (
    <button type="button" onClick={onClick} className="udui__Button_root">
      {children}
    </button>
  )
}

export default Button
