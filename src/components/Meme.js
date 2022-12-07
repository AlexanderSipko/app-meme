
import '../style/Meme.css';

import React from "react"
import {meData} from "../data/memesData.js"


export default function Meme() {

    const [memeImage, setMemeImage] = React.useState("")
    let url
    function getMemeImage() {
        const memesArray = meData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

    return (
      <main>
           <p>{url}</p>
      <div className="form">
          <input 
              type="text"
              placeholder="Top text"
              className="form--inputs"
          />
          <input 
              type="text"
              placeholder="Bottom text"
              className="form--inputs"
          />
          <button onClick={getMemeImage}
              className="form--button"
          >
              Get a new meme image 🖼
          </button>
      </div>
      <img className="meme--image" src={memeImage} alt='' />
    </main>
    )
}

