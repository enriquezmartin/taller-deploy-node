import '../styles/NoMatch.css'

const NoMatch = () => {
    return(
        <div className="error-container">
            <p className="title">e[r]ror de conexion</p>
            <p>Ups... Parece que la conexión con el bunker no funciona</p>
            <p>Quizas estan atacando nuestra base</p>
            <p>O quizas solo escribiste mal el path</p>
            <p>No lo chequeaste, ¿verdad?</p>
        </div>
    )
}

export default NoMatch