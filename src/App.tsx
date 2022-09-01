import * as React from 'react'
import './App.css'
import BulletList from './components/bullet-list/BulletList'
import BulletPoint, {
    IBulletPoint,
} from './components/bullet-point/BulletPoint'
import Header from './components/header/Header'

const bulletPoints: IBulletPoint[] = [
    {
        title: 'Open Rust',
        description: 'opens your recent rust project + updates rust',
        action: '...',
    },
]

function App() {
    return (
        <div className="app-container">
            <Header title={'Greetings master!'} />
            <BulletList title={'Bullet points'} bulletPoints={bulletPoints} />
        </div>
    )
}

export default App
