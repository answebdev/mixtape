import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import classes from '../styles/Artist.module.css';
import axios from 'axios';

// useHistory hook: https://reactrouter.com/web/api/Hooks
// Route params: https://scotch.io/courses/using-react-router-4/route-params

const Artist = ({ match }) => {
  const [data, setData] = useState([]);

  const history = useHistory();

  useEffect(() => {
    fetchArtist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchArtist = () => {
    axios
      .get(
        `https://personal-music-api.herokuapp.com/albums/?id=${match.params.id}`
      )
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const info = {
    marginTop: '45px',
  };

  return (
    <div className={classes.MainContainer}>
      {data.map((item) => (
        <Helmet>
          <title key={item.id}>
            Mixtape | {item.artist}: {item.album}
          </title>
        </Helmet>
      ))}

      <div className={classes.Parent1}>
        {data.map((item) => {
          return (
            <div key={item.id} className={classes.Child1}>
              <div>
                <h3 className={classes.ArtistHeader}>{item.artist}</h3>
                <img
                  className={classes.AlbumArtwork}
                  src={item.img}
                  alt={item.album}
                  title={item.album}
                />

                <p className={classes.Website} style={{ marginTop: '20px' }}>
                  <a
                    href={item.website}
                    rel='noopener noreferrer'
                    target='_blank'
                    variant='dark'
                  >
                    Website
                  </a>
                </p>
              </div>

              <div style={{ marginTop: '40px', marginBottom: '40px' }}>
                <Link
                  to='/artists'
                  className={classes.BackBtn}
                  variant='dark'
                  role='button'
                  aria-pressed='true'
                >
                  <i
                    className='fas fa-arrow-left'
                    onClick={() => history.goBack()}
                  ></i>
                  &nbsp;BACK TO ARTISTS
                </Link>
              </div>
            </div>
          );
        })}
        {data.map((item) => (
          <div key={item.id} className={classes.Child2}>
            <div style={info}>
              <p className={classes.AlbumYear}>
                {item.album} ({item.year})
              </p>

              <p className={classes.TrackListingHeader}>Track Listing</p>

              {item.tracks.map((track, index) => (
                <div key={index}>
                  <p className={classes.Tracks}>{track}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artist;
