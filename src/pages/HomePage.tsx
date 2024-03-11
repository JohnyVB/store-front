import { useEffect } from 'react'
import { useGalleryStore } from '../store/useGalleryStore'

import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { NextArrow, PrevArrow } from '../components/ArrowSlider'
import { useArticleStore } from '../store/useArticleStore'
import { Article } from '../interfaces/article.interface'

export const HomePage = () => {
   const { galleryImages, setFetchGalleryImages, setGalleryImages } =
      useGalleryStore()

   const { articles, setFetchArticles, setArticles } = useArticleStore()

   useEffect(() => {
      setFetchGalleryImages()
      setFetchArticles()
      return () => {
         setGalleryImages([])
         setArticles([])
      }
   }, [setFetchGalleryImages, setGalleryImages, setFetchArticles, setArticles])

   const groupedArticles = articles.reduce((grouped: any, article) => {
      const key = article.category
      if (!grouped[key]) {
         grouped[key] = []
      }
      grouped[key].push(article)
      return grouped
   }, {})

   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 1,
      shoArrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
         {
            breakpoint: 1400,
            settings: {
               slidesToShow: 7,
               slidesToScroll: 1,
               infinite: true,
               dots: false,
            },
         },
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 6,
               slidesToScroll: 1,
               infinite: true,
               dots: false,
            },
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
            },
         },
      ],
   }

   return (
      <div className="h-50">
         <ImageGallery
            items={galleryImages}
            showPlayButton={false}
            showFullscreenButton={false}
            autoPlay={true}
            showThumbnails={false}
            showBullets={true}
         />
         {Object.keys(groupedArticles).map((key, index) => (
            <div key={index} className="mx-10 mt-6 p-4 bg-white rounded-l">
               <div className="font-bold mb-3">{key}</div>
               <div className="slider-container">
                  <Slider {...settings}>
                     {groupedArticles[key].map(
                        (article: Article, index: number) => (
                           <div className="h-auto mx-3" key={index}>
                              <div className="w-40">
                                 <img
                                    className="object-cover"
                                    src={article.image_url}
                                    alt="Producto"
                                 />

                                 <div className="pt-3">
                                    <div className="block mt-1 leading-tight text-xs hover:text-blue-500">
                                       {article.name}
                                    </div>
                                    <p className="mt-2 text-lg">
                                       $ {article.selling_price}
                                    </p>
                                 </div>
                              </div>
                           </div>
                        ),
                     )}
                  </Slider>
               </div>
            </div>
         ))}
      </div>
   )
}
