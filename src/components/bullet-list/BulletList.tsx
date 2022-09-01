import * as React from 'react'
import BulletPoint, { IBulletPoint } from '../bullet-point/BulletPoint'

interface IBulletList {
    title: string
    bulletPoints: IBulletPoint[]
}

function BulletList({ title, bulletPoints }: IBulletList): JSX.Element {
    return (
        <div className="bullet-list-container">
            <>
                {bulletPoints.map((bulletPoint) => (
                    <BulletPoint {...bulletPoint} />
                ))}
            </>
        </div>
    )
}

export default BulletList
