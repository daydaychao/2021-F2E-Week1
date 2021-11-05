// import { useParams } from 'react-router'
import useStore from '@/store'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ScenicSpot as TScenicSpot } from '@/types'

type IdParams = {
  id: string
}

export function Detail() {
  // const [didLoad, setDidLoad] = useState<boolean>(false)
  const { id } = useParams<IdParams>()
  const allLocation = useStore((state) => state.scenicSpotsAll)

  const getAll = useStore((state) => state.getScenicSpotsAll)
  const getById = (id: string) => {
    return allLocation.find((item) => item.ID === id)
  }
  let detail = getById(id)

  useEffect(() => {
    if (allLocation.length === 0) {
      getAll()
    }
    if (detail && detail.ID != id) {
      console.warn('detail.ID != id', detail.ID)
      getById(id)
    }
  }, [allLocation, detail, id])

  return (
    <>
      {detail && (
        <div>
          {detail.ID}
          {detail.Name}
          TODO Pan ... types.tsx
          <br />
          TODO Pan. 資料+地圖
          <br />
          TODO Joeni 切圖
        </div>
      )}
    </>
  )
}
