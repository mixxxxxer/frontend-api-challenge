export interface IPost {
  id: number
  body: string
  created_at: string
  updated_at: string
  user: {
    id: number
    handle: string
  }
  likes: [
    {
      user: {
        id: number
        handle: string
      }
    }
  ]
}