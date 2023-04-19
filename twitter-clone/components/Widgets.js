import { SearchIcon } from "@heroicons/react/outline"
import { useState } from "react"
import { News } from "./News"


export const Widgets = ({newsResults, randomUsersResults}) => {

    const [artNum, setArtNum]= useState(3)
    const [randomUserNum, setRandomUserNum]= useState(5)
    console.log(newsResults, randomUsersResults)
  return (
    <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
        <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50  ">
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
        <div className=" sticky top-16  text-gray-700 space-y-3 bg-gray-100 pt-2 rounded-xl w-[90%] xl:w-[75%]">
            <h4 className="font-bold text-xl px-4 ">Who To Follow</h4>

            {randomUsersResults.slice(0,randomUserNum).map((randomUser)=> (
                <div key={randomUser.login.username} className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200">
                    <img src={randomUser.picture.thumbnail} className="rounded-full" width="40" alt="user-image"></img>
                    <div className="ml-4 truncate leading-5">
                        <h4 className="font-bold  hover:underline text-[14px] truncate" >{randomUser.login.username}</h4>
                        <h5 className="text-[13px] text-gray-500 truncate">{randomUser.name.first +" "+ randomUser.name.last}</h5>
                    </div>
                    <button className="ml-auto bg-black text-white rounded-full text-sm px-3.5 py-1.5 font-bold">Follow</button>
                </div>
            ))}
            <div onClick={()=> setRandomUserNum(randomUserNum+3)}className="text-blue-300 pl-4 pb-3 hover:text-blue-400">
                Show More
            </div>
        </div>
        
    </div>
  )
}
