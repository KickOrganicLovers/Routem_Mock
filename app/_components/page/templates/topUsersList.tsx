'use client'

import FeaturedUserCard from '@/app/_components/page/ingredients/featuredUserCard'
import { User } from "@/lib/client/types"
import RouteRankCard from "@/app/_components/page/ingredients/routeRankCard";
import {UserCard} from "@/app/_components/page/ingredients/userCard";


type Props = {
  users: User[]
}

export default function TopUsersList({ users }: Props) {

  return (
    <div className="w-full h-fit">
      <div className="w-full mb-3 flex flex-row md:flex-row-reverse items-center gap-2">
        <h2 className="text-sm font-semibold text-foreground-0">Top Users — This week</h2>
      </div>
      <div className="w-full md:h-[300px] sm:h-[800px] h-[900px] grid grid-rows-3 md:grid-rows-1 grid-cols-1 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-3">
        <div className="col-span-2 md:order-last">
          <FeaturedUserCard user={users[0]} metric="likes"/>
        </div>
        <div className="col-span-1 block md:order-4">
          <UserCard user={users[1]} rank={2} metric="likes"/>
        </div>
        <div className="col-span-1 block md:order-3">
          <UserCard user={users[2]} rank={3} metric="likes"/>
        </div>
        <div className="col-span-1 block md:hidden lg:block lg:order-2">
          <UserCard user={users[3]} rank={4} metric="likes"/>
        </div>
        <div className="col-span-1 block md:hidden xl:block xl:order-1">
          <UserCard user={users[4]} rank={5} metric="likes"/>
        </div>
      </div>
    </div>
  )
}
