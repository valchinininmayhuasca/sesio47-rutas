export function UserCard(imagen, nombre, cargo){

    return(
        <div>
            <img src={imagen} alt="" />
            <h3>{nombre}</h3>
            <h4>{cargo}</h4>
        </div>
    )

}