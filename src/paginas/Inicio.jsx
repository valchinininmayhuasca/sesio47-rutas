
import { usersData } from "../assets/usuarios"
import { UserCard } from "../componentes/UserCard"
import { useTheme } from "../context/themeContext"
import { Link } from "react-router-dom";

export function Inicio() {

    const { theme} = useTheme();

    console.log(UserCard)
    return (
        <div className={theme === "dark" ? "min-h-dvh bg-gray-900 text-white" : "min-h-dvh bg-white text-gray-900"}>
            <h1 className="text-3xl font-bold text-blue-500/60 my-[200px] hover:text-violet-600">Bienvenido a mi Pagina</h1>

            <p className="text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsum facilis explicabo ab quam natus accusamus atque ut mollitia aliquid.</p>

            <ul>
                <li className="before:bg-pink-500">Nosotros</li>
                <li>Contacto</li>
                <li>Productos</li>
            </ul>

            {/* APLICA ESTAS CLASES: grid, md:grid-cols-1, lg:grid-cols-2 y gap-4 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {usersData.map((user) =>
                    <UserCard key={user.id} imagen={user.imageLink} nombre={user.fullName} cargo={user.position} />
                )}
            </div>

            <Link to="/especial" target="-blank" >
            ENCUESTA
            </Link>
        </div>
    )
}

