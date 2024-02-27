import React from 'react'

const Player = props => {
    let {link,imgUrl,song_name} = props.data;
    console.log(props.handleClick)
    
  return (
    <div>
        <i></i>
        <h1>{song_name}</h1>
        <figure>
            <picture>
                <img src={Url}  onClick={()=> props.handleClick(link)} />
            </picture>
        </figure>
{/*         
        <span>
            <button onClick={handleClick}>play</button>
        </span> */}
        {/* <video src={props.link} controls ></video> */}

    </div>
  )
}

export default Player