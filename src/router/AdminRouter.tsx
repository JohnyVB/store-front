import { NavbarAdmin } from '../components/NavbarAdmin'
import { Route, Routes } from 'react-router-dom'
import { AdminPage } from '../pages'

export const AdminRouter = () => {
   return (
      <div className="flex flex-row">
         <NavbarAdmin />
         <div className="m-3">
            <Routes>
               <Route path="/" element={<AdminPage />} />
            </Routes>
         </div>
      </div>
   )
}
