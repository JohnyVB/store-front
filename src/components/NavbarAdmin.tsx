import { NavLink } from 'react-router-dom'

export const NavbarAdmin = () => {
   return (
      <div className="flex flex-col w-64 bg-white text-dark-200 rounded-blob">
         <div className="flex flex-row justify-between items-center px-4 py-2 border-b border-gray-700">
            <h1 className="font-semibold text-xl">Administrador</h1>
         </div>
         <nav className="flex flex-col flex-grow overflow-y-auto">
            <NavLink
               to="adminGallery"
               className={({ isActive }) =>
                  `px-4 py-2 hover:bg-gray-200 ${isActive ? 'active' : ''}`
               }
            >
               Galería
            </NavLink>
            <NavLink
               to="adminArticle"
               className={({ isActive }) =>
                  `px-4 py-2 hover:bg-gray-200 ${isActive ? 'active' : ''}`
               }
            >
               Artículos
            </NavLink>
         </nav>
      </div>
   )
}
