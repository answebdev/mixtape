import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Spinner from '../misc/Spinner';
import classes from '../styles/ArtistList.module.css';

const ArtistList = () => {
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredArtists, setFilteredArtists] = useState([]);
  const apiURL = 'https://personal-music-api.herokuapp.com/albums';

  useEffect(() => {
    fetchMusic();
  }, []);

  const fetchMusic = () => {
    setIsLoading(true);
    setError(null);

    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setArtists(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
        setError(error);
        setIsLoading(false);
      });
  };

  // Search Filter
  useEffect(() => {
    setFilteredArtists(
      artists.filter((artist) =>
        artist.artist.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, artists]);

  return (
    <div className={classes.Container}>
      <Helmet>
        <title>Mixtape | Artists</title>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
        ></link>
        <style type='text/css'>{`        
        .navbar {
          display: none;
        }
    `}</style>
      </Helmet>
      <div className={classes.Background}></div>
      <main className={classes.Main}>
        <section className={classes.Card}>
          <h1 className={classes.Mixtape}>Mixtape</h1>
          <p>Your stop for desert island tunes.</p>
          <div className={classes.Back}>
            <div className={classes.CardLinks}>
              <a href='/'>Home</a> | <a href='#artists'>Go To Artists</a>
            </div>
          </div>
        </section>
      </main>

      <article id='artists' className={classes.Article}>
        <div>
          <h1 className={classes.MainHeader}>Artists</h1>

          <hr />

          <h3 className={classes.InputHeader}>Search for an artist</h3>
          <input
            style={{ fontFamily: 'FontAwesome, Nunito' }}
            className={classes.Input}
            type='text'
            placeholder='&#xf002;  Search Artists'
            onChange={(e) => setSearch(e.target.value)}
          />

          <br />

          {filteredArtists.map((artist) => (
            <div {...artist}>
              <div className={classes.ArtistDiv}>
                <div className={classes.ArtistCard}>
                  <div>
                    <img
                      className={classes.AlbumArtwork}
                      src={artist.img}
                      alt=''
                    />
                  </div>
                  <div>
                    <p className={classes.Artist}>
                      <strong>{artist.artist}</strong>
                    </p>
                    <p className={classes.Album}>{artist.album}</p>
                    {artists ? (
                      // For dynamic routing:
                      <Link
                        className={classes.Link}
                        to={`artists/${artist.id}`}
                      >
                        View
                      </Link>
                    ) : null}

                    {/* if there's no data and it's not loading, show a message */}
                    {!artists && !isLoading ? <div>No data yet</div> : null}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* If not isLoading, show a button to load the data, otherwise show a loading state */}
          {!isLoading ? <div className='text-center'></div> : <Spinner />}

          {/* if not isLoading and there is an error state, display the error */}
          {!isLoading && error ? (
            <div>
              <p style={{ textAlign: 'center' }}>
                Oh, no. something went wrong!
              </p>
            </div>
          ) : null}
        </div>
      </article>
    </div>
  );
};

export default ArtistList;
