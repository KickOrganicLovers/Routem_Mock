'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import {MdExplore, MdInfo, MdLogin} from "react-icons/md";


export default function NavigatorList() {

    return (
        // ホバー時の背景色のdurationとmotionのスケールアップのアニメーションが共存できていないので後々修正する
        <div className={'flex md:gap-6 gap-2'}>
            <Link href="/login">
                <motion.button className={'bg-background-1 text-foreground-0 py-1 px-2 box-border rounded-full flex gap-2 text-lg items-center hover:theme-reversed transition-colors duration-150 cursor-pointer'}
                whileHover={{scale:1.05}}
                >
                    <MdLogin className={'text-xl'}/>
                    <span className={'md:block hidden'}>Login</span>
                </motion.button>
            </Link>
            <Link href="/explore">
                <motion.button className={'bg-background-1 text-foreground-0 py-1 px-2 box-border rounded-full flex gap-2 text-lg items-center hover:theme-reversed transition-colors duration-150 cursor-pointer'}
                whileHover={{scale:1.05}}
                >
                    <MdExplore className={'text-xl'}/>
                    <span className={'md:block hidden'}>Explore</span>
                </motion.button>
            </Link>
            <Link href="/about">
                <motion.button className={'bg-background-1 text-foreground-0 py-1 px-2 box-border rounded-full flex gap-2 text-lg items-center hover:theme-reversed transition-colors duration-150 cursor-pointer'}
                whileHover={{scale:1.05}}
                >
                    <MdInfo className={'text-xl'}/>
                    <span className={'md:block hidden'}>About</span>
                </motion.button>
            </Link>
        </div>
    )
}
