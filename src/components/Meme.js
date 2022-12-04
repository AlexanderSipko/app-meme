
import '../style/Meme.css';

import React from "react"
import {meData} from "../data/memesData.js"



export default function Meme() {
    function handleclick() {
        console.log(meData.data.memes)
    }

    return (
      <main>
      <form className="form">
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
          <button onClick={handleclick}
              className="form--button"
          >
              Get a new meme image 🖼
          </button>
      </form>
      <button onClick={handleclick}
              className="form--button"
          >
              Get a new meme image 🖼
          </button>
    </main>
    )
}

