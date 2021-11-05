import create from 'zustand'
import { ScenicSpot as TScenicSpot } from '@/types'
import { ScenicSpot as api } from '@/api'

interface State {
  scenicSpotsAll: TScenicSpot[]
  scenicSpotsFiltered: TScenicSpot[]
  scenicSpotId: TScenicSpot | {} | any
  getScenicSpotsAll: () => void
}

const useStore = create<State>((set) => ({
  scenicSpotsAll: [],
  scenicSpotsFiltered: [],
  scenicSpotId: {},
  async getScenicSpotsAll() {
    api.getAll().then((res) => set((state) => (state.scenicSpotsAll = res)))
  }
}))

export default useStore
