import { NavbarAdmin } from '../components/NavbarAdmin'
import { Route, Routes } from 'react-router-dom'
import { AdminGalleryPage, AdminArticlePage } from '../pages'

export const AdminRouter = () => {
   return (
      <div className="flex flex-row">
         <NavbarAdmin />
         <Routes>
            <Route path="/" element={<AdminGalleryPage />} />
            <Route path="/adminGallery" element={<AdminGalleryPage />} />
            <Route path="/adminArticle" element={<AdminArticlePage />} />
         </Routes>
      </div>
   )
}
