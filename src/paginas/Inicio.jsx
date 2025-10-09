import { usersData } from "../assets/usuarios"
import { UserCard } from "../componentes/UserCard"

export function Inicio() {

    return (
        <div>
            <h1 className="text-3xl font-bold text-blue-500/60 my-[200px] hover:text-violet-600">Bienvenido a mi Pagina</h1>

            <p className="text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsum facilis explicabo ab quam natus accusamus atque ut mollitia aliquid.</p>

            <ul>
                <li className="before:bg-pink-500">Nosotros</li>
                <li>Contacto</li>
                <li>Productos</li>
            </ul>

            <div>
                {usersData.map((user)=>
                    <UserCard key={user.id} imagen={user.imageLink} nombre={user.fullName} cargo={user.cargo}/>
                )}
            </div>
        </div>
    )
}