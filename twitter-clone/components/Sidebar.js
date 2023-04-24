import { SidebarMenuItem } from "./SidebarMenuItem"
import { HashtagIcon, HomeIcon} from "@heroicons/react/solid"
import {
  BellIcon,
  BookOpenIcon, 
  ClipboardIcon, 
  DotsCircleHorizontalIcon, 
  DotsHorizontalIcon, 
  HashTagIcon, 
  InboxIcon, 
  UserIcon 
} from "@heroicons/react/outline"

import Image from "next/image"
import {signIn, signOut, useSession} from "next-auth/react";

export const Sidebar = () => {

  const {data: session}= useSession();
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">

        <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
            <Image 

                width="50"
                height="50"
                src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
            
            ></Image>
        </div>

        <div className="mt-4 mb-2.5 xl:items-start">
          <SidebarMenuItem text="Home" Icon={HomeIcon} active/>
          <SidebarMenuItem text="Explore" Icon={HashtagIcon}/>
          {session && (
              <>
              
                <SidebarMenuItem text="Notifications" Icon={BellIcon}/>
                <SidebarMenuItem text="Messages" Icon={InboxIcon}/>
                <SidebarMenuItem text="Bookmarks" Icon={BookOpenIcon}/>
                <SidebarMenuItem text="Lists" Icon={ClipboardIcon}/>
                <SidebarMenuItem text="Profile" Icon={UserIcon}/>
                <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon}/>
              </>
            )
          
          }
          
        </div>
        {session ? (
          <>
              {/* Button */}
              <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
                Tweet
              </button>

              {/* profile */}

          <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto ">


            <img 
              onClick={signOut}
              // src="https://avatars.githubusercontent.com/u/76833140?s=400&amp;u=b45260fba07872f8c8f67f6c727806d891ba8464&amp;v=4" 
              src={session.user.image} 
              
              alt="user-img"
              className="
              rounded-full
              h-10
              w-10
              xl:mr-2
            "></img>

            <div className="leading-5 hidden xl:inline">
              <h4 className="font-bold">{session.user.name}</h4>
              <p className="text-gray-500">@{session.user.username}</p>
            </div>
            <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline"/>


          </div>

          </>
           
        ): (
          
          <button onClick={signIn} className="bg-blue-400 text-white rounded-full w-36 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
                Sign In
          </button>
        )}
        
    </div>
  )
}
