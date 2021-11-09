import create from 'zustand'
import { ScenicSpot as TScenicSpot } from '@/types'
import { ScenicSpot as api } from '@/api'

interface State {
  loading: boolean
  scenicSpotsAll: TScenicSpot[]
  scenicSpotsFiltered: TScenicSpot[]
  scenicSpotId: TScenicSpot | {} | any
  getScenicSpotsAll: () => void
}

const useStore = create<State>((set) => ({
  loading: false,
  scenicSpotsAll: [],
  scenicSpotsFiltered: [],
  scenicSpotId: {},
  async getScenicSpotsAll() {
    api.getAll().then((res) => set((state) => (state.scenicSpotsAll = res)))
  },
  setLoading(flag: boolean) {
    set({ loading: flag })
  }
}))

export default useStore
