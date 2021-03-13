import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import Spinner from '../misc/Spinner';
import classes from '../styles/Artists.module.css';

const ArtistList = () => {
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
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
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
        setError(error);
        setIsLoading(false);
      });
  };

  // const artistStyle = {
  //   display: 'grid',
  //   gridTemplateColumns: 'repeat(3, 1fr)',
  //   gridGap: '1rem',
  //   textAlign: 'center',
  // };

  return (
    <div>
      <Helmet>
        <title>Mixtape | List of Artists</title>
      </Helmet>
      <Container>
        <div className='App'>
          <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
            <strong>List of Artists</strong>
          </h3>

          <hr />

          <h3 className={classes.MainHeader}>Artists</h3>

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

          <p>
            <div>
              {/* <div style={artistStyle}> */}
              {artists.map((artist) => {
                return (
                  <Row key={artist.id}>
                    <Col>
                      {artists ? (
                        // For dynamic routing:
                        <Link to={`artists/${artist.id}`}>
                          <div>{artist.artist}</div>
                        </Link>
                      ) : null}

                      {/* if there's no data and it's not loading, show a message */}
                      {!artists && !isLoading ? <div>No data yet</div> : null}
                    </Col>
                  </Row>
                );
              })}
            </div>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default ArtistList;
