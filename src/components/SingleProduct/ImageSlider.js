import React,{useState,useRef} from 'react'
import ReactImageMagnify from 'react-image-magnify';
// import {useParams} from 'react-router-dom';
import c1 from '../images/c1.jpeg'
import c2 from '../images/c2.jpeg'
import c3 from '../images/c3.webp'
import c4 from '../images/c4.jpeg'
import rate from '../images/lo.png'
import { ImStarEmpty } from "react-icons/im";
import './ImageSlider.css'
const ImageSlider = (props) => {
    

  const images =[
      
      props.image,c1,c2,c3,c4
  ];
  const [img,setImg] = useState(images[0]);
  const hoverHandler = (image, i) => {
    setImg(image);
    refs.current[i].classList.add('active');
    for (var j = 0; j < images.length; j++) {
        if (i !== j) {
            refs.current[j].classList.remove('active');
        }
    }
  };
    const refs = useRef([]);
    refs.current = [];
    const addRefs = (el) => {
      if (el && !refs.current.includes(el)) {
          refs.current.push(el);
      }
    }
  return (
    <>
        <div className="container">
            <div className="left">
                <div className="left_1">
                    {images.map((image, i) => (
                        <div
                            className={i === 0 ? 'img_wrap active img' : 'img_wrap'}
                            key={i}
                            onMouseOver={() => hoverHandler(image, i)}
                            ref={addRefs}
                        >
                            <img src={image} alt=""  style={{width:'95px',heigth:'95px'}}/>
                            {/* <img src={c5}/> */}
                        </div>
                    ))}
                </div>
                <div className="left_2">
                    <ReactImageMagnify
                        {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: img,
                            },
                            largeImage: {
                                src: img,
                                width: 1000,
                                height: 800,
                            },
                            enlargedImageContainerDimensions: {
                                width: '130%',
                                height: '150%',
                            },
                        }}
                    />
                   
                   <div className="leftspan">
            
                   <h2 style={{color:'goldenrod',letterSpacing:'5px'}}>Product Details</h2>
                   <span style={{fontWeight: 'bold',fontFamily: 'monospace',fontSize: '26px'}}> {props.title}</span>
                    
                    <span>{props.price}</span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non bibendum tortor. Quisque vestibulum dignissim tincidunt. Aliquam pretium neque sem, id finibus neque elementum et.</span>
                   
                   <span id="rating">Reviews & Rating
                        <div className="ratingStar">
                           <span style={{fontSize: '24px', color:'black'}}>4</span> 
                           
                        <ImStarEmpty />
                        
                        {/* <img src='Bistar' alt='' style={{width:'60px', height:'50px'}}/> */}
                        </div>
                   </span>
                   <div>   
                        <h4 style={{fontSize: '20px', color:'black',fontFamily:'Helvetica',position:'relative',top:'-17px'}}>What our customers felt</h4>
                        <div style={{display:'flex', flexWrap:'row-wrap'}}>
                            <div style={{width:'25px', height:'25px'}}>
                                <img src={rate} alt='' style={{width:'20px', heigth:'15px',position:'relative',top:'-20px'}} />
                            </div>
                            <ul style={{display:'flex', flexWrap:'wrap',listStyle:'none',gap: '5px',
    top: '-28px'}}>
                                <li className="liStyle">Color</li>
                                <li className="liStyle">Style</li>
                                <li className="liStyle">Keeps Warm</li>
                                <li className="liStyle">True to Specs</li>
                            </ul>
                        </div>
                    </div>
                   </div>
                </div>
                
            </div>
            <div className="right"></div>
        </div>
    </>
  )
}

export default ImageSlider;

/**    display: flex;
    flex-direction: column;
    flex-wrap: wrap; */