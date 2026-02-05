"use client"

import { useEffect, useMemo, useState } from 'react'
import FeaturedRouteCard from '@/app/_components/page/ingredients/featuredRouteCard'
import RouteRankCard from '@/app/_components/page/ingredients/routeRankCard'

// Types for top routes (this week)
type TopRoute = {
  id: string
  title: string
  user: string
  likesThisWeek: number
  viewsThisWeek?: number
  category: string
  thumbnailImageSrc?: string
}

// Mock routes for demo (this week)
const mockTopRoutes: TopRoute[] = [
  { id: 'r1', title: 'Kyoto Old Town Walk', user: 'taro', likesThisWeek: 1280, viewsThisWeek: 18200, category: 'History', thumbnailImageSrc: '/Rootem_Mock/mockImages/Kyoto.jpg' },
  { id: 'r2', title: 'Okinawa Beach Hopping', user: 'hanako', likesThisWeek: 990, viewsThisWeek: 15420, category: 'Beach', thumbnailImageSrc: '/Rootem_Mock/mockImages/Okinawa.jpg' },
  { id: 'r3', title: 'Hokkaido Food Trip', user: 'satoshi', likesThisWeek: 1570, viewsThisWeek: 21030, category: 'Food', thumbnailImageSrc: '/Rootem_Mock/mockImages/Hokkaido.jpg' },
  { id: 'r4', title: 'Tokyo Night Lights', user: 'emi', likesThisWeek: 870, viewsThisWeek: 16800, category: 'City', thumbnailImageSrc: '/Rootem_Mock/mockImages/Tokyo.jpg' },
  { id: 'r5', title: 'Nara Temple Circuit', user: 'ken', likesThisWeek: 1430, viewsThisWeek: 19990, category: 'Culture', thumbnailImageSrc: '/Rootem_Mock/mockImages/Nara.jpg' },
  { id: 'r6', title: 'Mount Fuji Scenic Drive', user: 'yuki', likesThisWeek: 760, viewsThisWeek: 14550, category: 'Nature', thumbnailImageSrc: '/Rootem_Mock/mockImages/Fuji.jpg' },
]

// Simple hook to match Tailwind's md breakpoint (min-width: 768px)
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)
  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return
    const mql = window.matchMedia(query)
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    setMatches(mql.matches)
    mql.addEventListener ? mql.addEventListener('change', handler) : mql.addListener(handler as any)
    return () => {
      mql.removeEventListener ? mql.removeEventListener('change', handler) : mql.removeListener(handler as any)
    }
  }, [query])
  return matches
}

export default function TopRoutesList() {
  // Sort by likes for this week (descending)
  const sorted = useMemo(() => {
    const arr = [...mockTopRoutes]
    arr.sort((a, b) => b.likesThisWeek - a.likesThisWeek)
    return arr
  }, [])

  // Determine how many columns we have and limit visible routes accordingly
  const isMdUp = useMediaQuery('(min-width: 768px)')
  const cols = isMdUp ? 6 : 1
  const visibleCount = cols >= 2 ? Math.min(sorted.length, 1 + (cols - 2)) : Math.min(sorted.length, 1)

  const visible = sorted.slice(0, visibleCount)
  const top = visible[0]
  const rest = visible.slice(1)

  return (
    <div className="w-full h-fit">
      <div className="w-full mb-3 flex items-center gap-2">
        <h2 className="text-sm font-semibold text-foreground-0">Top Routes — This week</h2>
      </div>

      <div className="w-full h-[300px] grid grid-cols-1 md:grid-cols-6 gap-3">
        {top && (
          <div className="md:col-span-2">
            <FeaturedRouteCard route={top} metric="likes" />
          </div>
        )}

        {rest.map((r, idx) => (
          <div key={r.id} className="col-span-1">
            <RouteRankCard route={r} rank={idx + 2} metric="likes" />
          </div>
        ))}
      </div>
    </div>
  )
}
