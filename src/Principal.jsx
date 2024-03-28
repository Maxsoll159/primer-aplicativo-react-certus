import { Card } from "./components/Card"
import { Navbar } from "./components/Navbar"
import './index.css'
import { personajes } from './utils/personajes'

export const Principal = () => {
    return (
        <main>
            <Navbar />
            <h1>Mi Primer Aplicativo Cetus</h1>

            {
                personajes.map((personaje) => (
                    <Card
                        key={personaje.nombre}
                       {...personaje}

                    />
                ))
            }
        </main>
    )
}
