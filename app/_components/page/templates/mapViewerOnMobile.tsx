import { Route } from "@/lib/client/types";
import { useState } from "react";
import { HiHeart } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
    routes: Route[];
};

export default function MapViewerOnMobile(props: Props) {
    const [focusedRouteIndex, setFocusedRouteIndex] = useState(0);
    const [direction, setDirection] = useState<"left" | "right">("left");

    const route = props.routes[focusedRouteIndex];

    let startX = 0;

    const onTouchStart = (e: React.TouchEvent) => {
        startX = e.touches[0].clientX;
    };

    const onTouchEnd = (e: React.TouchEvent) => {
        const endX = e.changedTouches[0].clientX;
        const diff = endX - startX;

        if (Math.abs(diff) > 100) {
            if (diff > 0 && focusedRouteIndex !== 0) {
                setDirection("right");
                setFocusedRouteIndex((prev) => prev - 1);
            } else if (diff < 0 && focusedRouteIndex !== props.routes.length - 1) {
                setDirection("left");
                setFocusedRouteIndex((prev) => prev + 1);
            }
        }
    };

    return (
        <div
            className="w-full h-[700px] rounded-xl overflow-hidden block md:hidden text-foreground-0"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            style={{ touchAction: "pan-y" }} // ← iOS対策
        >
            <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                    key={focusedRouteIndex}
                    custom={direction}
                    initial={{ x: direction === "left" ? 600 : -600, opacity: 0.75 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction === "left" ? -600 : 600, opacity: 0.75 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="w-full h-full flex flex-col"
                >
                    <div className={'w-full h-[200px] relative'}>
                        <img className="absolute w-full h-full object-cover" src="/map.png" />
                        <div className={'absolute z-10 h-full w-1/3 p-1 bg-background-0/50 backdrop-blur-sm right-0'}>
                            <img className="w-full h-full rounded-lg object-cover border-1 border-background-0 shadow-md" src={route.thumbnailImageSrc} />
                        </div>
                    </div>
                    <div className="w-full flex-1 flex flex-col p-2 gap-2">
                        <h1 className="text-2xl font-bold line-clamp-2">{route.title}</h1>

                        <div className="text-xl flex items-center gap-2 text-foreground-1">
                            <img
                                className="w-8 h-8 rounded-full"
                                src={route.user.profileImage}
                            />
                            <span>{route.user.name}</span>
                            <span>・ {route.category}</span>
                        </div>

                        <div className="w-fit flex items-center px-2 py-1 gap-2 text-rose-500 bg-rose-500/10 rounded-full">
                            <HiHeart />
                            <span className="text-nowrap">{route.likesThisWeek} likes</span>
                        </div>

                        <div className="mt-4 flex flex-col gap-3">
                            <h3 className="text-lg font-semibold text-foreground-1">
                                Description
                            </h3>
                            <p className="text-foreground-1/80 leading-relaxed">
                                This is a beautiful route through {route.category} focused spots.
                                Enjoy the amazing views and local culture curated by @
                                {route.user.name}.
                            </p>
                        </div>
                        <div className="mt-4 flex flex-col gap-3">
                            <h3 className="text-lg font-semibold text-foreground-1">Route Details</h3>
                            <div className="grid grid-cols-2 gap-3 text-sm">
                                <div className="p-3 rounded-lg bg-background-0 border border-grass/10">
                                    <span className="block text-foreground-1/40">Distance</span>
                                    <span className="font-medium text-foreground-1">5.2 km</span>
                                </div>
                                <div className="p-3 rounded-lg bg-background-0 border border-grass/10">
                                    <span className="block text-foreground-1/40">Duration</span>
                                    <span className="font-medium text-foreground-1">2.5 hours</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
