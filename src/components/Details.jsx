import React, { useEffect, useState } from 'react';
import './details.css';
import { useParams } from 'react-router-dom';
import db from './Firebase';
import { getDoc, doc } from 'firebase/firestore';

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'movies', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setDetails(docSnap.data());
        } else {
          console.log('No such document in firebase.');
        }

        setLoading(false);
      } catch (error) {
        console.log('Error getting document:', error);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="details">
        <div className="details-background">
          <img src={details.backgroundImg} alt={details.title} />
        </div>

        <div className="details-content">
          <div className="details-first-section">
            <img src={details.titleImg} alt={details.title} />
          </div>
          <div className="details-second-section">
            <button>
              <img src="../../public/images-20231223T175511Z-001/images/play-icon-black.png" alt="" />
              Play
            </button>
            <button>
              <img src="../../public/images-20231223T175511Z-001/images/play-icon-white.png" alt="" />
              Trailer
            </button>
            <button>
              <img src="../../public/images-20231223T175511Z-001/images/group-icon.png" alt="" />
            </button>
          </div>
          <div className="details-third-section">
            <p className="sub-title">{details.subTitle}</p>
            <p className="description">{details.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
