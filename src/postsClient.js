import { IPost } from "./models";
class PostsClient {
  constructor(){
    this.url = 'https://chitter-backend-api-v2.herokuapp.com/peeps'
  }

  async loadPosts() {
    const posts = null;
    posts = await fetch(this.url)
      .then(response => response.json())
      .then(data => {return data})
      .catch((error) => console.log(error.message));
    return posts;
  }

  createNote(data = "", callback, callback_error) {
    const request = new Request(this.url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({"content": data})
    });

    fetch(request)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(callback_error())
  }

  resetNotes(callback, callback_error) {
    const request = new Request(this.url, {
      method: 'DELETE'
    })
    fetch(request)
    .then(promice => callback(promice))
    .catch((err) => callback_error(err))
  }
}

module.exports = PostsClient;