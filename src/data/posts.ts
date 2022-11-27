import { IPost } from "../models";

export const posts: IPost[] = [
  {
    "id": 1552,
    "body": "Hello",
    "created_at": "2022-11-05T13:57:16.454Z",
    "updated_at": "2022-11-05T13:57:16.454Z",
    "user": {
        "id": 1187,
        "handle": "naraeSept"
    },
    "likes": [
        {
            "user": {
                "id": 1152,
                "handle": "berty5"
            }
        }
    ]
  },
  {
    "id": 1550,
    "body": "This is test peep!",
    "created_at": "2022-10-29T20:13:35.912Z",
    "updated_at": "2022-10-29T20:13:35.912Z",
    "user": {
        "id": 1167,
        "handle": "ekaterina-sep"
    },
    "likes": [
      {
        "user": {
          "id": 4000,
          "handle": "fdfsd"
        }
      }
    ]
  }
]