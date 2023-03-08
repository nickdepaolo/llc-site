import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Stage, Layer, Line } from 'react-konva'

const Main = () => {
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

 

  return (
    <div id='main'>
      <br/>
      <h1>Device Test!</h1>
      <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
      {isDesktopOrLaptop && 
        <div>
          <p>You are a desktop or laptop</p> 
          <Stage width={300} height={300}>
            {/* <Layer>
              <Line 
                closed points={[0, 100, 100, 100, 0, 0]} fill="red"
              />
            </Layer> */}

            <Layer>
            <Line 
                closed points={[100, 100, 50, 50, 100, 50]} fill="yellow"
              />
            </Layer>
          </Stage>
        </div>
      }

      {isTabletOrMobile && 
        <div>
          <p>You are a tablet or mobile phone</p>
        </div>
      }
      
    </div>
  )
}

export default Main