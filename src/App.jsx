import { use, useState } from "react";

const App = () => {
    const [site_state, setSiteState] = useState(true)
    const [viewGrid, setViewGrid] = useState(true)
    const [size, setSize] = useState(3)

    return (
        <div>
            <div className="px-6 pb-30">
                <header>
                    <nav className="flex justify-between items-center py-4 text-slate-800">
                        <div className="flex items-center gap-6">
                            <h1 className="text-3xl font-bold">Cofé</h1>
                            <div className="flex flex-col justify-center">
                                <h2 className="text-xl font-bold">The best cofe in the city</h2>
                                <p className="text-sm text-slate-600">subtitle of this cofe</p>
                            </div>
                        </div>
                        <div>
                            <h1 className={`font-bold ${site_state ? "text-green-500" : "text-red-500"} bg-slate-200 py-2 px-4 rounded-lg`}>
                                {site_state ? "Online" : "Offline"} {/*online or offline*/}
                            </h1>
                        </div>
                    </nav>
                </header>
                <main>
                    <section>
                        <div className="h-60 bg-red-200 rounded-lg">

                        </div>

                        <form className="mt-4 ring p-2 rounded-lg ring-slate-300">
                            <div className="grid grid-cols-[1fr_10fr_1fr] gap-4 min-h-8 ">
                                <button className="flex justify-between items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="currentColor" fill-opacity="0" stroke-dasharray="40" stroke-dashoffset="40" d="M10.76 13.24c-2.34 -2.34 -2.34 -6.14 0 -8.49c2.34 -2.34 6.14 -2.34 8.49 0c2.34 2.34 2.34 6.14 0 8.49c-2.34 2.34 -6.14 2.34 -8.49 0Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3" /><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="40;0" /></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M10.5 13.5l-7.5 7.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="12;0" /></path></g></svg>
                                </button>
                                <input type="text" className="focus:outline-0" placeholder="Search..." />
                                <button className="flex justify-between items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="14" stroke-dashoffset="14" d="M20 5h-13"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="14;0" /></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M20 10h-10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0" /></path><path stroke-dasharray="20" stroke-dashoffset="20" d="M20 15h-16"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="20;0" /></path><path stroke-dasharray="14" stroke-dashoffset="14" d="M20 20h-13"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0" /></path></g></svg>
                                </button>
                            </div>
                        </form>
                        <ul className="flex flex-wrap gap-2 mt-4">
                            <li className="py-1 px-4 bg-slate-800 text-white rounded-full hover:bg-slate-800 hover:text-white transition-all duration-300 cursor-pointer">
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="14" stroke-dashoffset="14" d="M6 9h13"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="14;0" /></path><path stroke-dasharray="14" stroke-dashoffset="14" d="M5 15h13"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="14;0" /></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M10 5l-2 14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="16;0" /></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M16 5l-2 14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="16;0" /></path></g></svg>
                                    <h3>
                                        All
                                    </h3>

                                </div>
                            </li>
                            {
                                Array.from({ length: 10 }).map((_, i) => {
                                    return (
                                        <li className="py-1 px-4 bg-slate-200 text-black rounded-full hover:bg-slate-800 hover:text-white transition-all duration-300 cursor-pointer">
                                            <h3>tag</h3>
                                        </li>
                                    )
                                })

                            }
                        </ul>
                    </section>
                    <section>
                        <div className="flex justify-between items-center py-4 text-slate-800">
                            <h1 className="text-2xl font-bold">Listing Products</h1>
                            <div className="flex gap-4">
                                <button className="bg-slate-200 py-2 px-3 rounded-md">
                                    <i class="fa-solid fa-table-columns"></i>
                                </button>
                                <button className="bg-slate-200 py-2 px-3 rounded-md">
                                    <i class="fa-solid fa-table-cells-large"></i>
                                </button>
                            </div>
                        </div>
                        <div className={`grid ${viewGrid ? "grid-cols-2" : "grid-cols-1"} gap-4`}>
                            {
                                Array.from({ length: size }).map((_, i) => {
                                    return (
                                        <div className="bg-slate-200 rounded-lg h-80 p-2 flex flex-col justify-between">
                                            <div className="bg-red-200 h-[60%] rounded-lg">

                                            </div>
                                            <div className="h-[35%] rounded-lg flex flex-col justify-between pt-2 px-1 gap-2">
                                                <div>
                                                    <h2 className="font-bold text-slate-800">Product Name</h2>
                                                    <p className="text-slate-600">Description</p>
                                                </div>
                                                <span className="text-slate-600 text-md flex">$9.99/<p className="text-xs content-center">1</p></span>
                                            </div>
                                            <div className="flex justify-end">
                                                <button className="bg-slate-800 text-white hover:bg-slate-700 px-2 py-1  rounded-lg ">
                                                    <i className="fas fa-cart-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </section>
                </main>
            </div>
            <div className="fixed bottom-0 bg-slate-100 w-full
" >
                {/* Navigation */}
                <ul className="grid grid-cols-5">
                    <li className="text-slate-800 flex flex-col justify-center items-center p-2 text-[0.8rem]">
                        <i className="fas fa-home text-lg p-2 rounded-lg  bg-slate-900 text-white hover:bg-slate-900 hover:text-white transition-all duration-300 cursor-pointer"></i>
                        <p>Home</p>
                    </li>
                    <li className="text-slate-800 flex flex-col justify-center items-center p-2 text-[0.8rem]">
                        <i className="fa-solid fa-list text-lg p-2 rounded-lg  hover:bg-slate-900 hover:text-white transition-all duration-300 cursor-pointer"></i>
                        <p>Category</p>
                    </li>
                    <li className="text-slate-800 flex flex-col justify-center items-center p-2 text-[0.8rem]">
                        <i className="fa-solid fa-cart-shopping text-lg p-2 rounded-lg  hover:bg-slate-900 hover:text-white transition-all duration-300 cursor-pointer"></i>
                        <p>Shopping Cart</p>
                    </li>
                    <li className="text-slate-800 flex flex-col justify-center items-center p-2 text-[0.8rem]">
                        <i className="fa-solid fa-comments text-lg p-2 rounded-lg  hover:bg-slate-900 hover:text-white transition-all duration-300 cursor-pointer"></i>
                        <p>Feeds</p>
                    </li>
                    <li className="text-slate-800 flex flex-col justify-center items-center p-2 text-[0.8rem]">
                        <i className="fa-solid fa-user text-lg p-2 rounded-lg  hover:bg-slate-900 hover:text-white transition-all duration-300 cursor-pointer"></i>
                        <p>Account</p>
                    </li>

                </ul>
                <footer className="bg-slate-800 text-white text-center content-center p-2">
                    <h3>@codeshark</h3>
                </footer>
            </div>
        </div>
    )
}

export default App;

