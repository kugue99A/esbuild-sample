import type { ReactNode } from 'react'
import './index.css'

type Props = {
  children: ReactNode
}

const Card = ({ children }: Props): JSX.Element => {
  return <div className="udui__Card_root">{children}</div>
}

export default Card
