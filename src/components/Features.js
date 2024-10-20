import React from 'react'

export default function Features() {
    return (
        <div id='features' className='dark:bg-gray-900 '>
            <div className="grid  gap-8 md:grid-cols-2 lg:gap-12 p-6 md:p-10 mt-12">
                <a href="/"
                    className="flex  backdrop-filter hover:bg-gray-50 hover:bg-opacity-10 flex-col p-6 space-y-6  rounded-[40px] shadow lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6">
                    <div
                        className="flex items-center justify-center w-16 h-16  rounded-full shadow-inner lg:h-20 lg:w-20">
                        <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z">
                            </path>
                        </svg>
                    </div>
                    
                    <div className="flex-1">
                        
                        <div className="flex items-center">
                        <h5 className="text-xl font-bold text-white lg:text-2xl mr-3">Add Project</h5>
                        {/* <span class="relative flex h-3 w-3">
    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
    <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
  </span> */}
                        </div>                        
                        <p className="mb-6 text-lg mt-3 text-slate-400">Find out what plan is right for you</p>
                        <span className="flex items-baseline text-lg font-bold text-indigo-600">
                            View price comparison
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                    </div>
                </a>
                <a href="/"
                    className="flex  backdrop-filter hover:bg-gray-50 hover:bg-opacity-10 flex-col p-6 space-y-6  rounded-[40px] shadow lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6">
                    <div
                        className="flex items-center justify-center w-16 h-16 rounded-full lg:h-20 lg:w-20">
                        <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
                            </path>
                        </svg>
                    </div>
                    <div className="flex-1">
                        <h5 className="mb-3 text-xl font-bold lg:text-2xl text-white">View Projects</h5>
                        <p className="mb-6 text-lg text-slate-400">Find out what plan is right for you</p>
                        <span className="flex items-baseline text-lg font-bold text-indigo-600">
                            Contact our professionals
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                    </div>
                </a>

                <a href="/"
                    className="flex  backdrop-filter hover:bg-gray-50 hover:bg-opacity-10 flex-col p-6 space-y-6  rounded-[40px] shadow lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6">
                    <div
                        className="flex items-center justify-center w-16 h-16  rounded-full shadow-inner lg:h-20 lg:w-20">
                        <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
                            </path>
                        </svg>
                    </div>
                    <div className="flex-1">
                        <h5 className="mb-3 text-xl font-bold lg:text-2xl text-white">Discussion Forum</h5>
                        <p className="mb-6 text-lg text-slate-400">Find out what plan is right for you</p>
                        <span className="flex items-baseline text-lg font-bold text-indigo-600">
                            Contact our professionals
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                    </div>
                </a>
                <div className="w-[20%] absolute  h-[50%] white__gradient"/>
                <div className="w-[30%] absolute right-0 h-[20%] pink__gradient"/>


            </div>
        </div>
    )
}