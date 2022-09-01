import * as React from 'react'
import './BulletPoint.css'

export interface IBulletPoint {
    title: string
    description: string
    action?: string
}

function BulletPoint({
    title,
    description,
    action,
}: IBulletPoint): JSX.Element {
    return (
        <div className="bullet-point-container">
            <p className="bulletTitle">{title}</p>
            <p className="bulletDescription">{description}</p>
            {action !== undefined && <p className="bulletAction">{action}</p>}
        </div>
    )
}

export default BulletPoint
