import { useEffect, useState } from "react"
import { IPost } from "../models"

interface ModalProps {
  password : string
  name : string
}

export const usePosts = (name: string, password:string) => {
  const [auth, setAuth] = useState({})
  const [error, setError] = useState('')

  async function createUser({name, password}:ModalProps) {
    try {
      setError('')
      
      const request = new Request('https://chitter-backend-api-v2.herokuapp.com/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"user": {"handle":name, "password":password}})
      });
      const response = await fetch(request)
      .then(response => response.json())
      .then(data => {return data})

      setAuth(response)
    } catch (e) {
      const error =  e as Error;
      setError(error.message)
    }

  }

  return {auth, error}
}