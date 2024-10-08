import './style.css'

export default function Notify({ color, duration, menssagem }) {
    return (
        <div className="notify">
            <h1>{menssagem}</h1>
        </div>
    )
}