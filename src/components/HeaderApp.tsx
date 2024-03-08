import React from 'react'

export const HeaderApp = () => {
  return (
    <div className='h-[70px] bg-blue-500 text-white flex items-center justify-center space-x-4'>
        <h1>TechStore</h1>
      <input
        type="text"
        placeholder="Search..."
        className="text-black w-[500px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <h1>Admin</h1>
      <h1>Mis compras</h1>
      <h1>Favoritos</h1>
      <h1>Carrito</h1>
      <h1>User</h1>
    </div>
  )
}
