'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import Logo from './logo'
import { Search, Home, ChevronDown, Gauge, Layers, Flag, Check, User, Cog, MessagesSquare, LogOut } from 'lucide-react'
import React from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [sideOpen, setSideOpen] = React.useState(true)

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='min-h-screen bg-bg grid lg:grid-cols-app grid-cols-1 text-white antialiased'>
          <aside className='relative w-full lg:border-r border-b border-slate-800'>
            <div className={`px-5 md:w-[19rem] ${sideOpen ? 'h-fit lg:h-full' : 'h-full lg:h-full'} fixed py-8 flex flex-col gap-5 bottom-0 lg:overflow-y-auto right-0 lg:left-0 top-0 z-20 bg-slate-900 lg:bg-transparent w-full`}>
              <div className='flex lg:flex-col gap-4'>
                <Logo />
                <div className='w-full border rounded-r-full rounded-l-full px-4 py-2 shadow-sm flex flex-row gap-1 items-center justify-center'>
                  <Search className='w-5 h-5' />
                  <input type='text' className='w-full flex-1 border-none placeholder:text-zinc-300 p-0 bg-transparent outline-none' placeholder='Search...' />
                </div>

                <ChevronDown onClick={() => setSideOpen(!sideOpen)} className={`w-10 h-10 ${sideOpen ? 'rotate-180 transition-all' : 'rotate-0 transition-all'} block lg:hidden`}/>
              </div>

              <div className={`${sideOpen ? 'hidden lg:flex' : 'flex'} justify-between flex-col h-full`}>
                <nav className={`flex flex-col gap-3 mt-6`}>
                  <div className='w-full group hover:cursor-pointer flex justify-between hover:bg-gradient-to-r from-transparent from-20% to-purple-700 p-1 rounded-sm transition-all'>
                    <div className='flex flex-row gap-2 group-hover:text-purple-400 transition-all'>
                      <Home className='' />
                      <span className='font-semibold'>Home</span>
                    </div>

                    <ChevronDown />
                  </div>

                  <div className='w-full group hover:cursor-pointer flex justify-between hover:bg-gradient-to-r from-transparent from-20% to-purple-700 p-1 rounded-sm transition-all'>
                    <div className='flex flex-row gap-2 group-hover:text-purple-400 transition-all'>
                      <Layers className='' />
                      <span className='font-semibold'>Projects</span>
                    </div>

                    <ChevronDown />
                  </div>

                  <div className='w-full group hover:cursor-pointer flex justify-between hover:bg-gradient-to-r from-transparent from-20% to-purple-700 p-1 rounded-sm transition-all'>
                    <div className='flex flex-row gap-2 group-hover:text-purple-400 transition-all'>
                      <Gauge className='' />
                      <span className='font-semibold'>Dashboard</span>
                    </div>

                    <ChevronDown />
                  </div>

                  <div className='w-full group hover:cursor-pointer flex justify-between hover:bg-gradient-to-r from-transparent from-20% to-purple-700 p-1 rounded-sm transition-all'>
                    <div className='flex flex-row gap-2 group-hover:text-purple-400 transition-all'>
                      <User className='' />
                      <span className='font-semibold'>Users</span>
                    </div>

                    <ChevronDown />
                  </div>

                  <div className='w-full group hover:cursor-pointer flex justify-between hover:bg-gradient-to-r from-transparent from-20% to-purple-700 p-1 rounded-sm transition-all'>
                    <div className='flex flex-row gap-2 group-hover:text-purple-400 transition-all'>
                      <Check className='' />
                      <span className='font-semibold'>Tasks</span>
                    </div>

                    <ChevronDown />
                  </div>

                  <div className='w-full group hover:cursor-pointer flex justify-between hover:bg-gradient-to-r from-transparent from-20% to-red-700 p-1 rounded-sm transition-all'>
                    <div className='flex flex-row gap-2 group-hover:text-red-400 transition-all'>
                      <Flag className='' />
                      <span className='font-semibold'>Reporting</span>
                    </div>

                    <ChevronDown />
                  </div>
                </nav>

                <div className=' gap-2 flex flex-col'>
                  <div className='w-full group flex hover:cursor-pointer justify-between hover:bg-gradient-to-r from-transparent from-20% to-blue-700 p-1 rounded-sm transition-all'>
                    <div className='flex flex-row gap-2 group-hover:text-blue-400 transition-all'>
                      <MessagesSquare className='' />
                      <span className='font-semibold'>Support</span>
                    </div>

                    <ChevronDown />
                  </div>

                  <div className='w-full group flex hover:cursor-pointer justify-between hover:bg-gradient-to-r from-transparent from-20% to-blue-700 p-1 rounded-sm transition-all'>
                    <div className='flex flex-row gap-2 group-hover:text-blue-400 transition-all'>
                      <Cog className='' />
                      <span className='font-semibold'>Config</span>
                    </div>

                    <ChevronDown />
                  </div>

                  <div className='px-4 py-6 mt-2 bg-gradient-to-bl from-violet-500 to-purple-600 rounded-md flex flex-col'>
                    <span className='text-sm/5 font-medium'>User Space</span>
                    <span className='text-sm/5'>Your team has used <span className='font-semibold'>80%</span> of your available storage. <span className='font-semibold text-emerald-400'>Need more?</span> </span>
                    <div className='w-full h-3 bg-violet-700 rounded-r-full rounded-l-full mt-4'>
                      <div className='w-[80%] h-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-r-full rounded-l-full' />
                    </div>

                    <div className='mt-6 flex flex-row gap-3 items-center justify-end'>
                      <div className='cursor-pointer px-4 py-2 bg-violet-700 rounded-md text-center font-medium text-sm hover:bg-violet-800'>
                        Dismiss
                      </div>

                      <div className='px-4 py-2 cursor-pointer bg-violet-700 rounded-md text-center font-medium text-sm hover:bg-violet-800'>
                        Upgrade
                      </div>
                    </div>
                  </div>

                  <div className='w-full h-[2px] bg-slate-800 rounded-r-full rounded-l-full my-4' />

                  <a href='https://github.com/Jose-Fernando-Goncalves' className='flex flex-row gap-2'>
                    <img className='w-12 h-12 rounded-full p-[2px] bg-gradient-to-br from-violet-500 to-purple-500' src='https://avatars.githubusercontent.com/u/99756516?v=4' />
                    <div className='flex flex-col truncate'>
                      <span className='font-medium truncate'>José Fernando</span>
                      <span className='text-sm text-slate-400 truncate'>rodocellcrz@gmail.com</span>
                    </div>

                    <LogOut className='ml-auto' />
                  </a>


                </div>

              </div>

            </div>
          </aside>
          <main className='pt-10 pb-12 lg:mt-0 mt-24'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
