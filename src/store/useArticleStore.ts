import { create } from 'zustand'
import { Article } from '../interfaces/article.interface'
import mainAxios from '../api/axios.config'

interface Store {
  articles: Article[]
  error: string | null
  setArticles: (articles: []) => void
  setFetchArticles: () => void
}

export const useArticleStore = create<Store>((set) => ({
  articles: [],
  error: null,
  setArticles: (articles: []) => set({ articles }),
  setFetchArticles: async () => {
      try {
          const response = await mainAxios.get<Article[]>('/article/getallarticles');
          set({ articles: response.data })
      } catch (error) {
        
      }
  },
}))