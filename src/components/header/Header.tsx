import * as React from 'react'
import './Header.css'

interface IHeader {
    title: string
    children?: React.ReactNode
}

function Header({ title, children }: IHeader): JSX.Element {
    return (
        <div className="header-container">
            <p className="headerText">{title}</p>
        </div>
    )
}

export default Header
