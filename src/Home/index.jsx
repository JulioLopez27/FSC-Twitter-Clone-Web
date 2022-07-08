import { useEffect, useState } from 'react'
import axios from 'axios'

import { TweetForm } from '../componentes'
import { Tweet } from '../componentes'



export function Home({ loggedInUser }) {
  const [data, setData] = useState([])
  async function getData() {
    const res = await axios.get(`${import.meta.env.VITE_API_HOST}/tweets`, {
      headers: {
        'authorization': `Bearer ${loggedInUser.accessToken} `
      }
    })

    setData(res.data)
  }
  useEffect(() => { getData() },
    [])

  return (
    <>
      <TweetForm loggedInUser={loggedInUser} onSuccess={getData} />
      <div>
        
        {data.length && data.map(tweet => (
          <Tweet key={tweet.id} name={tweet.user.name} username={tweet.user.username} avatar="/src/imgs/4.png">
              {tweet.text}
          </Tweet>
        ))}

      </div>
    </>
  )

}
