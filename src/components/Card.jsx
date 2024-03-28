export const Card = (prop) => {

    const { nombre, edad, aldea, rango, jutsu, estado, imagen } = prop

    return (
        <div className="cardPersonaje">
            <img src={`/img/${imagen}`} alt="" />
            <div>
                <h2>{nombre}</h2>
                <p>Edad: {edad}</p>
                <p>Aldea: {aldea}</p>
                <p>Rango {rango}</p>
                <p>Equipo: Equipo 7</p>
                <p>Jutsu {jutsu}</p>
                <p>Estado: {estado}</p>
            </div>
        </div>
    )
}
