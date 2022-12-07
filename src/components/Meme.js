
import '../style/Meme.css';

import React from "react"
import {meData} from "../data/memesData.js"


export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState(meData)
    
    const myStyle={
        backgroundImage: 
        `url('${meme.randomImage}')`,
    };
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

        this.myStyle={
            backgroundImage: 
            `url('${meme.randomImage}')`,
        };
        
    }

    

    return (
      <main>
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
      <section className='answe' style={myStyle}>
            <h2 className="answe--title">answerOne</h2>
            <h2 className="answe--title">answerTwo</h2>
        </section>
    </main>
    )
}

