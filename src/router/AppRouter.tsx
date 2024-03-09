import { Navigate, Route, Routes } from 'react-router-dom'
import {
   HomePage,
   MyShoppingPage,
   FavoritesPage,
   NotFoundPage,
   ShoppingCarPage,
   LoginPage,
} from '../pages'
import { AdminRouter } from './AdminRouter'

export const AppRouter = () => {
   return (
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/admin" element={<AdminRouter />} />
         <Route path="/myShopping" element={<MyShoppingPage />} />
         <Route path="/favorites" element={<FavoritesPage />} />
         <Route path="/shoppingCar" element={<ShoppingCarPage />} />
         <Route path="/login" element={<LoginPage />} />
         <Route path="/notFound" element={<NotFoundPage />} />
         <Route path="*" element={<Navigate to="/notFound" />} />
      </Routes>
   )
}
