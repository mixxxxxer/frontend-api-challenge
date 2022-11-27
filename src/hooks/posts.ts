import { useEffect, useState } from "react"
import { IPost } from "../models"

export function usePosts () {
  const [posts, setPosts] = useState<IPost[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function getPosts() {
    try {
      setError('')
      setLoading(true)
      const response = await fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
        .then(response => response.json())
        .then(data => {return data})
      setPosts(response)
      setLoading(false);
    } catch (e) {
      const error =  e as Error;
      setLoading(false)
      setError(error.message)
    }

  }
  useEffect(() => {
    getPosts()
  }, [])

  return {posts, loading, error}
}