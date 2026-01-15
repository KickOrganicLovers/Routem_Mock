'use client'

import {useState} from "react";
import ContentsSelector from "@/app/_components/page/templates/contentsSelector";
import MapViewer from "@/app/_components/page/templates/mapViewer";
import TopUsersList from "@/app/_components/page/templates/topUsersList";
import TopRoutesList from "@/app/_components/page/templates/topRoutesList";
import RecommendedArticlesList from "@/app/_components/page/templates/recommendedArticlesList";

export type selectedType = 'home' | 'activity' | 'interests' | 'recent' | 'trending'

export default function ClientRoot() {
    const [selected, setSelected] = useState<selectedType>('home')
    return (
        <div className={'w-full max-w-[1600px] h-fit flex flex-col items-center px-8 pb-8 gap-8 relative'}>
            <ContentsSelector selected={selected} setSelected={setSelected}/>
            {(() => {
                switch (selected) {
                    case 'home': return (
                        <div className={'w-full h-fit flex flex-col items-center gap-8'}>
                            <MapViewer/>
                            <TopRoutesList/>
                            <TopUsersList/>
                            <RecommendedArticlesList/>
                        </div>
                    )
                    case 'activity': return <></>
                    case 'interests': return <></>
                    case 'recent': return <></>
                    case 'trending': return <></>
                }
            })()}
        </div>
    )
}
