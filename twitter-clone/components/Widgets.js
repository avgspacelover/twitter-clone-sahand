import { SearchIcon } from "@heroicons/react/outline"
import { useState } from "react"
import { News } from "./News"


export const Widgets = ({newsResults}) => {

    const [artNum, setArtNum]= useState(3)
  return (
    <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
        <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-52  ">
            <div className="flex items-center p-3 rounded-full relative">
                <SearchIcon className="h-5 z-50 text-gray-500"/>
                <input className="absolute inset-0 rounded-full pl-11 border-gray-300 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100 "type="text" placeholder="Search Twitter"/>
            </div>


        </div>
        <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2">
            <h4 className="font-bold text-xl px-4 ">
                What's Happening?

            </h4>
            {newsResults.slice(0,artNum).map((article)=> (
                <News key={article.title} article={article}/>
            ))}

            <button onClick={()=>setArtNum(artNum+3)} className="text-blue-300 pl-4 pb-3 hover:text-blue-400">
                Show More
            </button>
        </div>
        
    </div>
  )
}
