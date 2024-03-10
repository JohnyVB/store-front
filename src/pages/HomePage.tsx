import { useEffect } from 'react'
import { useGalleryStore } from '../store/useGalleryStore'

import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

export const HomePage = () => {
   const { galleryImages, setFetchGalleryImages, setGalleryImages } =
      useGalleryStore()

   useEffect(() => {
      setFetchGalleryImages()
      return () => {
         setGalleryImages([])
      }
   }, [setFetchGalleryImages, setGalleryImages])

   console.log('galleryImages', JSON.stringify(galleryImages, null, 2))

   const products = [
      {
         name: 'Producto 1',
         price: '290.000',
         image: 'https://res.cloudinary.com/dr0wxllnu/image/upload/v1710040221/store-back/article/mwfyi8fo6vdpnbfhzf13.webp',
      },
      {
         name: 'Producto 1',
         price: '290.000',
         image: 'https://res.cloudinary.com/dr0wxllnu/image/upload/v1710040221/store-back/article/mwfyi8fo6vdpnbfhzf13.webp',
      },
      {
         name: 'Producto 1',
         price: '290.000',
         image: 'https://res.cloudinary.com/dr0wxllnu/image/upload/v1710040221/store-back/article/mwfyi8fo6vdpnbfhzf13.webp',
      },
   ]

   return (
      <div>
         <ImageGallery
            items={galleryImages}
            showPlayButton={false}
            showFullscreenButton={false}
            autoPlay={true}
            showThumbnails={false}
            showBullets={true}
         />
         <div className="mx-10 mt-6 p-4 bg-white rounded-l">
            <div className="font-bold mb-3">Categoría</div>

            {products.map((product, index) => (
               <div className="w-40 my-2 m-4">
                  <div className="w-40">
                     <img
                        className="object-cover"
                        src="https://res.cloudinary.com/dr0wxllnu/image/upload/v1710040221/store-back/article/mwfyi8fo6vdpnbfhzf13.webp"
                        alt="Producto"
                     />
                  </div>
                  <div className="pt-3">
                     <div className="block mt-1 leading-tight hover:text-blue-500">
                        Nombre del producto
                     </div>
                     <p className="mt-2 text-lg">$ 290.000</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}
