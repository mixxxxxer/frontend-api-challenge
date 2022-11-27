import React, { useState } from "react"

export const CreatePost = () => {
  const [value, setValue] = useState('')

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
    setValue(event.target.value)
  }

  return (
    <form onSubmit={submitHandler}>
      <input placeholder="Post text..." 
        type="text" 
        className="w-full outline-none border py-2 px-4 mb-2"
        value={value}
        onChange={changeHandler}
      ></input>
      <button type="submit" className="py-2 px-4 border bg-yellow-200" >Create</button>
    </form>
  )
}