import { Link, NavLink } from 'react-router-dom'

export const HeaderApp = () => {
   return (
      <div className="h-[70px] bg-blue-500 text-white flex items-center justify-center space-x-4">
         <Link to="/">TechStore</Link>
         <input
            type="text"
            placeholder="Search..."
            className="text-black w-[500px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
         />

         <div className="navbar-collapse">
            <div className="navbar-nav flex items-center justify-center space-x-4">
               <NavLink
                  className={({ isActive }) =>
                     `nav-item nav-link ${isActive ? 'activeItemHeader' : ''}`
                  }
                  to="/admin"
               >
                  Admin
               </NavLink>
               <NavLink
                  className={({ isActive }) =>
                     `nav-item nav-link ${isActive ? 'activeItemHeader' : ''}`
                  }
                  to="/myShopping"
               >
                  Mis compras
               </NavLink>
               <NavLink
                  className={({ isActive }) =>
                     `nav-item nav-link ${isActive ? 'activeItemHeader' : ''}`
                  }
                  to="/favorites"
               >
                  Favoritos
               </NavLink>
               <NavLink
                  className={({ isActive }) =>
                     `nav-item nav-link ${isActive ? 'activeItemHeader' : ''}`
                  }
                  to="/shoppingCar"
               >
                  Carrito
               </NavLink>
               <NavLink
                  className={({ isActive }) =>
                     `nav-item nav-link ${isActive ? 'activeItemHeader' : ''}`
                  }
                  to="/login"
               >
                  Login
               </NavLink>
            </div>
         </div>
      </div>
   )
}
