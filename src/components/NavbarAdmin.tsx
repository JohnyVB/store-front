import { NavLink } from 'react-router-dom'

export const NavbarAdmin = () => {
   return (
      <div className="flex flex-col w-64 bg-white text-dark-200 rounded-blob">
         <div className="flex flex-row justify-between items-center px-4 py-2 border-b border-gray-700">
            <h1 className="font-semibold text-xl">Administrador</h1>
            <button className="focus:outline-none">
               <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
               >
                  <path
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     stroke-width="2"
                     d="M4 6h16M4 12h16M4 18h16"
                  />
               </svg>
            </button>
         </div>
         <nav className="flex flex-col flex-grow overflow-y-auto">
            <NavLink to="/" className="px-4 py-2 hover:bg-gray-200">
               Home
            </NavLink>
            <NavLink to="/about" className="px-4 py-2 hover:bg-gray-200">
               About
            </NavLink>
            <NavLink to="/contact" className="px-4 py-2 hover:bg-gray-200">
               Contact
            </NavLink>
         </nav>
      </div>
   )
}
