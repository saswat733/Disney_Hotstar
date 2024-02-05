import React, { useEffect, useState } from 'react';
import './home.css';
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';
import RecommendedForYou from './RecommendedForYou';
import NewToDisney from './NewToDisney';
import Originals from './Originals';
import Trending from './Trending';
import { useDispatch, useSelector } from 'react-redux';
import db from './Firebase.jsx';
import { selectUserName } from '../feature/user/UserSlice';
import { setMovies } from '../feature/movie/MovieSlice';
import { collection, getDocs } from 'firebase/firestore';

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const [recommends, setRecommends] = useState([]);
  const [newDisney, setNewDisney] = useState([]);
  const [originals, setOriginals] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const colRef = collection(db, 'movies');
        const snapshot = await getDocs(colRef);

        const updatedRecommends = [];
        const updatedNewDisney = [];
        const updatedOriginals = [];
        const updatedTrending = [];

        snapshot.docs.forEach((doc) => {
          const data = { id: doc.id, ...doc.data() };

          switch (data.type) {
            case 'recommend':
              updatedRecommends.push(data);
              break;
            case 'new':
              updatedNewDisney.push(data);
              break;
            case 'original':
              updatedOriginals.push(data);
              break;
            case 'trending':
              updatedTrending.push(data);
              break;
            default:
              break;
          }
        });

        setRecommends(updatedRecommends);
        setNewDisney(updatedNewDisney);
        setOriginals(updatedOriginals);
        setTrending(updatedTrending);
        console.log(updatedNewDisney)

        dispatch(
          setMovies({
            recommend: updatedRecommends,
            newDisney: updatedNewDisney,
            original: updatedOriginals,
            trending: updatedTrending,
          })
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userName]);

  return (
    <div className='home-sections'>
      <ImageSlider />
      <Viewers />
      <RecommendedForYou />
      <NewToDisney />
      <Originals />
      <Trending />
    </div>
  );
};

export default Home;
