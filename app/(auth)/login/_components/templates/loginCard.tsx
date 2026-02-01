"use client";

import { motion } from "framer-motion";
import {FaGoogle} from "react-icons/fa";
import {useState} from "react";
import Link from "next/link";

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {}

  return (
      <motion.div
          initial={{x: 300, opacity: 0}} // 上から & 透明
          animate={{x: 0, opacity: 1}} // 元の位置 & 不透明
          transition={{
            type: "spring",
            stiffness: 200, // バネの硬さ
            damping: 20, // 減衰（大きいと揺れが少ない）
          }}
          className="w-full h-full flex flex-col md:flex-row rounded-2xl text-foreground-0 "
      >
        {/* 左側：画像 + ロゴ + 見出し */}
        <div className="w-full md:w-1/2 h-64 md:h-auto p-3 overflow-hidden flex flex-col justify-center items-center gap-6 @container">
            <h2 className={'text-4xl text-foreground-0/80'}>Routem, Travel Itinerary Sharing Platform</h2>
            <h1 className={'text-8xl text-foreground-0 leading-snug text-center font-bold'}>Why not record <br /> your great voyage here?</h1>
            <div className={'flex flex-col gap-4 items-center'}>
                <h3 className={'w-fit text-foreground-0/60 font-bold text-2xl'}>Don't Have Account?</h3>
                <Link href="/signup">
                    <h3 className={'w-fit text-foreground-0 text-xl pb-1 px-2 border-b-2 border-foreground-0 hover:opacity-80 transition-opacity'}>Create Account →</h3>
                </Link>
            </div>
        </div>

        {/* 右側：フォーム */}
        <div
            className="w-full md:w-1/2 md:h-full h-fit box-border md:p-3 p-6 overflow-hidden relative grid place-items-center @container ">
          <div className="w-full max-w-sm space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Sign in</h2>
              <p className="mt-2 text-sm text-gray-600">Please enter your details.</p>
            </div>

            <form className="mt-8 space-y-6" onSubmit={handleLogin}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-foreground-0 focus:border-foreground-0 sm:text-sm"
                      placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="password" id="password-label" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-foreground-0 focus:border-foreground-0 sm:text-sm"
                      placeholder="••••••••"
                  />
                </div>
              </div>

              {error && (
                  <div className="text-red-500 text-sm text-center">
                    {error}
                  </div>
              )}

              <div className="space-y-4">
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-foreground-0 hover:bg-foreground-0/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-foreground-0 transition-colors"
                >
                  Sign in
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                <button
                    type="button"
                    className="w-full flex items-center justify-center gap-3 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-foreground-0 transition-colors"
                >
                  <FaGoogle className="w-5 h-5 text-red-500" />
                  <span>Google</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
  );
}
