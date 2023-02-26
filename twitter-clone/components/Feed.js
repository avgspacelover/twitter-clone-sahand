import { SparklesIcon } from '@heroicons/react/outline'
import { Input } from './Input'
import { Post } from './Post'


export const Feed = () => {

    const posts= [
        {
            id: "1",
            name: "antariksh",
            username: "antariksh_17",
            userImg: "https://avatars.githubusercontent.com/u/76833140?s=400&u=b45260fba07872f8c8f67f6c727806d891ba8464&v=4",
            img: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            text: "coding is life",
            timestamp: "2 hours ago"

        },
        {
            id: "2",
            name: "antariksh",
            username: "antariksh_17",
            userImg: "https://avatars.githubusercontent.com/u/76833140?s=400&u=b45260fba07872f8c8f67f6c727806d891ba8464&v=4",
            img: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            text: "a short break with nature",
            timestamp: "3 hours ago"

        },
    ]


  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
        <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
            <div className="flex items-center justify-center px-0 ml-auto w-9 h-9 hoverEffect">
                <SparklesIcon className="h-5"/>
            </div>
        </div>
        <Input />
        {posts.map((post)=> (
            <Post key= {post.id} post={post}/>
        ))}
    </div>
  )
}
