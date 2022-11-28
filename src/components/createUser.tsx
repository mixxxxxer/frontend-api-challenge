import React, { useState } from "react"

export const CreateUser = () => {
  const [username, setUserame] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (event: React.FormEvent) => {
    // const request = new Request(this.url, {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify({"content": data})
    // });

    // fetch(request)
    // .then(response => response.json())
    // .then(data => callback(data))
    // .catch(callback_error())
    // event.preventDefault()
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserame(event.target.value)
    setPassword(event.target.value)
  }

  return (
    <form onSubmit={submitHandler}>
      <input placeholder="Enter Username" 
        type="text" 
        className="w-full outline-none border py-2 px-4 mb-2"
        value={username}
        onChange={changeHandler}
      ></input>
      <input placeholder="Enter password" 
        type="text" 
        className="w-full outline-none border py-2 px-4 mb-2"
        value={password}
        onChange={changeHandler}
      ></input>
      <button type="submit" className="py-2 px-4 border bg-yellow-200" >Create</button>
    </form>
  )
}