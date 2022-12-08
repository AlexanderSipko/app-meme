
import '../style/Meme.css';

import React from "react"
import {meData} from "../data/memesData.js"


export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    // const [allMemeImages, setAllMemeImages] = React.useState(meData)
    
    const myStyle={
        backgroundImage: 
        `url('${meme.randomImage}')`,
        
    };

    function getMemeImage() {
        const memesArray = meData.data.memes
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

    const [inputTop, setInputTop] = React.useState()
    const [inputBottom, setInputBottom] = React.useState()

    const inputRefTop = React.useRef();
    const inputRefBottom = React.useRef();

    function hendlerFirstInputTop() {
        setInputTop(inputRefTop.current.value)
    }

    function hendlerFirstInputBottom() {
        setInputBottom(inputRefBottom.current.value)
    }

    return (
      <main>
      <div className="form">
          <input 
              onChange={hendlerFirstInputTop}
              type="text"
              placeholder="Top text"
              className="form--inputs"
              ref={inputRefTop}
          />
          <input
              onChange={hendlerFirstInputBottom}
              type="text"
              placeholder="Bottom text"
              className="form--inputs"
              ref={inputRefBottom}
          />
          <button onClick={getMemeImage}
              className="form--button"
          >
              Get a new meme image 🖼
          </button>
      </div>
      <section className='answe' style={myStyle}>
            <h2 className="answe--title">{inputTop}</h2>
            <h2 className="answe--title">{inputBottom}</h2>
        </section>
    </main>
    )
}

