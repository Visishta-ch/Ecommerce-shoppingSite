import React from 'react';
import { useParams, NavLink, useLocation } from 'react-router-dom';
import searchLogo from '../components/images/finder.jpg';
import styles from './ProductDetail.module.css';

import ImageSlider from '../components/SingleProduct/ImageSlider';


const ProductDetail = (props) => {
  const params = useParams();
  console.log(params); //id of clicked product is been generated
  //const [imgparams,setImgParams] = useState(params)
  console.log(props);
  // const { pathname } = useLocation(props); ///Store/ProductDetail/k1
  // console.log(pathname);
  const location = useLocation(); ///Store/ProductDetail/
  const {price, title, image, id} = location.state;
  console.log(price, title, image, id);
  return (
    <>
    <section>
      <nav>
        <div className="nav-bar">
          <input
            type="text"
            style={{
              padding: '10px',
              margin: '10px',
              width: '20rem',
              height: '1rem',
              color: '#ccc',
              fontFamily: 'monospace',
            }}
            placeholder="filter products"
          />
          <img src={searchLogo} alt="" className={styles.img} />

          <NavLink
            to=""
            style={{
              padding: '10px',
              margin: '10px',
              textDecoration: 'none',
              color: 'white',
            }}
            className="nav-home"
          >
            HOME
          </NavLink>
          <NavLink
            to="/Store"
            style={{
              padding: '10px',
              margin: '10px',
              textDecoration: 'none',
              color: 'white',
            }}
            className="nav-store"
          >
            STORE
          </NavLink>
          <NavLink
            to="/About"
            style={{
              padding: '10px',
              margin: '10px',
              textDecoration: 'none',
              color: 'white',
            }}
            className="nav-about"
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/Contact"
            style={{
              padding: '10px',
              margin: '10px',
              textDecoration: 'none',
              color: 'white',
            }}
            className="nav-about"
          >
            CONTACT
          </NavLink>
          <br />
        </div>
      </nav>

      <div className={styles.navDiv}>
      <div></div>
        <div className={styles.navbar}>
          <a href="#" className={styles.link}>
            Music{' '}
          </a>
          <a href="#" className={styles.link}>
            Podcasts
          </a>
          <a href="#" className={styles.link}>
            Movies
          </a>
        </div>
      </div>
   
      
       <div className={styles.box}>
        <ImageSlider id= {id} price={price} image={image} title={title} />
        
      </div>  

      <footer  style={{top:'23rem',position: 'relative', backgroundColor:'skyblue'}}>
        <div className="footer-icons">
             <h2 style={{color: 'white'}}>The Generics</h2>     

        </div>
    </footer>  
  
    </section>
    
    </>
  );
    }

export default ProductDetail;
