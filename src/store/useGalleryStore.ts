import { create } from 'zustand'
import mainAxios from '../api/axios.config'
import { Gallery } from '../interfaces/gallery.interface'
import { ReactImageGalleryItem } from 'react-image-gallery'

interface Store {
  galleryImages: ReactImageGalleryItem[]
  error: string | null
  setGalleryImages: (images: []) => void
  setFetchGalleryImages: () => void
}

export const useGalleryStore = create<Store>()((set) => ({
  galleryImages: [],
  error: null,
  setGalleryImages: (images: []) => set({ galleryImages: images }),
  setFetchGalleryImages: async () => {
    try {
      const response = await mainAxios.get<Gallery[]>('/gallery/getimagesgallery');
      const images: ReactImageGalleryItem[] = response.data.map(item => {
        return {
          original: item.image_url,
          thumbnail: item.thumbnail,
        }
      })
      set({ galleryImages: images })
    } catch (error: any) {
      console.log('error', error);
      set({ error: error.message })
    }
  },
}))