import React, { useEffect,useState } from 'react'
import './header.css'
import { auth,provider } from './Firebase.jsx'
import {signInWithPopup, signOut} from 'firebase/auth'
import { setLogLevel } from 'firebase/app'
import { Link, NavLink } from 'react-router-dom'
import Home from './Home.jsx'
// import {useDispatch, useDispatch,useSelector} from 'react-redux'
// import {selectUserEmail,selectUserName,selectUserPhoto} from '../feature/user/UserSlice.jsx'

const Header = () => {
    const [value, setvalue] = useState('')
    const [photo, setphoto] = useState('')
    const [logOut, setlogOut] = useState(false)
    // const useDispatch=useDispatch()
    // const history=useHistory()
    // const username=useSelector(selectUserName)
    // const userPhoto=useSelector(selectUserPhoto)


    const handleAuth = async () => {
        try {
          const data = await signInWithPopup(auth, provider);
          setvalue(data.user.email);
          setphoto(data.user.photoURL);
          localStorage.setItem("email", data.user.email);
        } catch (error) {
          console.error('Authentication error:', error);
        }
      };
     
      
    //   const handleSignOut=()=>{
    //       signOut(auth).then(()=>{
    //           setvalue(null);
    //           localStorage.removeItem('email')
    //           setlogOut(false)
    //         }).catch((error)=>{
    //             console.log('sign-out',error);
    //         })
    //     }
        useEffect(() => {
            setvalue(localStorage.getItem('email'));
            setphoto(localStorage.getItem('photo'));
            // setlogOut(JSON.parse(localStorage.getItem('value')) !== null);
        }, []);
        
        // useEffect(() => {
        //     auth.onAuthStateChanged(async (value) => {
        //         if (value) {
        //             setvalue(value);
        //             setphoto(value.photoURL);
        //             localStorage.setItem('value', JSON.stringify(value));
        //             setlogOut(true);
        //         } else {
        //             setvalue(null);
        //             setphoto('');
        //             localStorage.removeItem('value');
        //             setlogOut(false);
        //         }
        //     });
        // }, []);
        
      
  return (
    <>
        <div className='nav-sections'>
            <div className="nav-section-1">
                <img src="/images-20231223T175511Z-001/images/logo.svg" alt="" />
            </div>
            <div className="nav-section-2">
                <div className="icons">
                    <img src="/images-20231223T175511Z-001/images/home-icon.svg" alt="" />
                    <Link to='/home'>Home</Link>
                </div>
                <div className="icons">
                    <img src="/images-20231223T175511Z-001/images/search-icon.svg" alt="" />
                    search
                </div>
                <div className="icons">
                    <img src="/images-20231223T175511Z-001/images/original-icon.svg" alt="" />
                    Originals
                </div>
                <div className="icons">
                    <img src="/images-20231223T175511Z-001/images/movie-icon.svg" alt="" />
                    Movies
                </div>
                <div className="icons">
                    <img src="/images-20231223T175511Z-001/images/watchlist-icon.svg" alt="" />
                    watchlist
                </div>
                <div className="icons">
                    <img src="/images-20231223T175511Z-001/images/series-icon.svg" alt="" />
                    series
                </div>
            </div>
            <div className="nav-section-3">
          {photo ? (
            <div className='left-sec'>
              <img
                id="photu"
                src={photo}
                alt=""
                onClick={() => setlogOut((prev) => !prev)}
              />
                <div id="sign-out">
                  <button>Sign Out</button>
                </div>
                </div>
            
          ) : (
            <div className="left-sec">
            <button onClick={handleAuth}>Login</button>
            </div>
          )}
        </div>

        </div>
    </>
  )
}

export default Header