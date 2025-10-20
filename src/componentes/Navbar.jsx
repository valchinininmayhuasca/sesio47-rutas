<<<<<<< HEAD

import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../context/themeContext";
import { useUser } from "../context/userContext";

export function Navbar({ onOpenLogin }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const { theme, toggleTheme } = useTheme();
  const { user, isAuthenticated, logout } = useUser();

  // Estilo común para acciones (tema / login / logout)
  const actionBtn =
    "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-medium " +
    "hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition";

  console.log(user)

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between gap-4">
        {/* Logo y nombre */}
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <img
            src="https://images.vexels.com/media/users/3/153808/isolated/preview/4876c523fb2612dceba4be0c7031461c-icono-de-trazo-frontal-de-silla-de-oficina.png"
            alt="Logo"
            className="w-8 h-8"
          />
          <span className="font-semibold text-lg tracking-tight">
            La casa de la oficina
          </span>
        </Link>

        {/* Enlaces (desktop) */}
        <div className="hidden md:flex gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `hover:text-yellow-400 transition-colors ${
                isActive ? "text-yellow-400 font-medium" : ""
              }`
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/nosotros"
            className={({ isActive }) =>
              `hover:text-yellow-400 transition-colors ${
                isActive ? "text-yellow-400 font-medium" : ""
              }`
            }
          >
            Nosotros
          </NavLink>
          <NavLink
            to="/productos"
            className={({ isActive }) =>
              `hover:text-yellow-400 transition-colors ${
                isActive ? "text-yellow-400 font-medium" : ""
              }`
            }
          >
            Productos
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              `hover:text-yellow-400 transition-colors ${
                isActive ? "text-yellow-400 font-medium" : ""
              }`
            }
          >
            Contacto
          </NavLink>
        </div>

        {/* Acciones derechas: botón tema + zona de usuario (misma línea y estilo) */}
        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} className={actionBtn} aria-label="Cambiar tema">
            Cambiar a {theme === "dark" ? "Light" : "Dark"}
          </button>

          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              {/* Avatar opcional si lo tuvieras en user.avatar */}
              {user?.avatar && (
                <img
                  //src={user.avatar}
                  alt={user.nombre ?? "Usuario"}
                  referrerPolicy="no-referrer"
                  className="h-8 w-8 rounded-full object-cover"
                />
              )}
              <div className="hidden sm:block leading-4 text-right">
                <p className="text-sm font-medium">{user?.nombre}</p>
                <p className="text-xs text-gray-400">{user?.cargo}</p>
              </div>
              <button onClick={logout} className={actionBtn}>
                Cerrar sesión
              </button>
            </div>
          ) : (
            <button onClick={onOpenLogin} className={actionBtn}>
              Iniciar sesión
            </button>
          )}

          {/* Botón hamburguesa (solo móviles) */}
          <button
            className="md:hidden text-2xl focus:outline-none ml-1"
            onClick={toggleMenu}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 flex flex-col items-center space-y-3 py-4 animate-slideDown">
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) =>
              `hover:text-yellow-400 transition-colors ${
                isActive ? "text-yellow-400 font-medium" : ""
              }`
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/nosotros"
            onClick={closeMenu}
            className={({ isActive }) =>
              `hover:text-yellow-400 transition-colors ${
                isActive ? "text-yellow-400 font-medium" : ""
              }`
            }
          >
            Nosotros
          </NavLink>
          <NavLink
            to="/productos"
            onClick={closeMenu}
            className={({ isActive }) =>
              `hover:text-yellow-400 transition-colors ${
                isActive ? "text-yellow-400 font-medium" : ""
              }`
            }
          >
            Productos
          </NavLink>
          <NavLink
            to="/contacto"
            onClick={closeMenu}
            className={({ isActive }) =>
              `hover:text-yellow-400 transition-colors ${
                isActive ? "text-yellow-400 font-medium" : ""
              }`
            }
          >
            Contacto
          </NavLink>
        </div>
      )}
    </nav>
  );
}
=======
import { NavLink, Link } from "react-router-dom"
export function Navbar(){
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" >
          <span className="brand-name">La casa de la oficina</span>
        </Link>

        <div className="nav-links">
          <NavLink to="/" end className={({isActive}) => `nav-link ${isActive ? 'active':''}`}>Inicio</NavLink>
          <NavLink to="/nosotros" className={({isActive}) => `nav-link ${isActive ? 'active':''}`}>Nosotros</NavLink>
          <NavLink to="/productos" className={({isActive}) => `nav-link ${isActive ? 'active':''}`}>Productos</NavLink>
        </div>
      </div>
    </nav>
  
  )
}  
export default Navbar;
>>>>>>> 15228711b4fc98f829a12063c5618f8b642ae3c3
