import { useState } from "react"
import { IPost } from "../models"


interface PostProps {
  post: IPost
}

export function Post({post}: PostProps) {

  const [details, setDetails] = useState(false)

  return (
    <div className="py-2 px-4 rounded flex flex-col mb-2 items-center">
      <article className="container bg-white shadow-2xl rounded-2xl p-5">
        <h1 className="font-bold text-yellow-500">{post.user.handle}</h1>
        <p className="font-light text-gray-500 hover:font-bold">{post.body}</p>
        <h6 className="text-sm text-gray-300 mb-5">Likes: {post.likes?.length}</h6>
        <a href="#" className="rounded-lg py-2 px-4 text-center text-white bg-yellow-300 hover:bg-yellow-200 ">Like</a>
        <a href="#" className="rounded-lg py-2 px-4 text-center text-white bg-red-300 hover:bg-red-200 ">Dislike</a>
      </article>
    </div>
  )
}