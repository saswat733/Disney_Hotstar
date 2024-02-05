import React from 'react'
import './viewers.css'

const Viewers = () => {
  return (
    <div className='channels'>
        <div className="channel">
            <img src="../../public/images-20231223T175511Z-001/images/viewers-disney.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src='../../public/videos-20231223T175512Z-001/videos/1564674844-disney.mp4' type='video/mp4'/>
            </video>
        </div>
        <div className="channel">
            <img src="../../public/images-20231223T175511Z-001/images/viewers-pixar.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src='../../public/videos-20231223T175512Z-001/videos/1564676714-pixar.mp4' type='video/mp4'/>
            </video>
        </div>
        <div className="channel">
            <img src="../../public/images-20231223T175511Z-001/images/viewers-national.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src='../../public/videos-20231223T175512Z-001/videos/1564676296-national-geographic.mp4' type='video/mp4'/>
            </video>
        </div>
        <div className="channel">
            <img src="../../public/images-20231223T175511Z-001/images/viewers-starwars.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src='../../public/videos-20231223T175512Z-001/videos/1608229455-star-wars.mp4' type='video/mp4'/>
            </video>
        </div>
        <div className="channel">
            <img src="../../public/images-20231223T175511Z-001/images/viewers-marvel.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src='../../public/videos-20231223T175512Z-001/videos/1564676115-marvel.mp4' type='video/mp4'/>
            </video>
        </div>
    </div>
  )
}

export default Viewers