import React, { Fragment } from 'react'
import Player from './player';


const AudioBlock = ({audioArr}) => {
    let handleClick = val =>{
        const audio =  new Audio(val)
        audio.play()
    }

        // console.log(audioArr);
  return (
    <div>
        <article>
            {audioArr.map((audio , index) =>{
                return( 
                    <Fragment key={index+1}>
                        <Player key = {index+1} data ={audio} handleClick= {handleClick} />
                    </Fragment>
                    )
                }
                )}
        </article>
    </div>
  )
  }
export default AudioBlock;