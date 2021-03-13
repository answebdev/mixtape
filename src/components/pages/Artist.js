import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import axios from 'axios';

const Artist = ({ match }) => {
  const [data, setData] = useState([]);

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
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const artist = {
    display: 'grid',
    gridTemplateColumns: '50% auto',
    gridGap: '1rem',
    padding: '4em 1em',
  };

  const info = {
    marginTop: '45px',
  };

  return (
    <div>
      {data.map((item) => (
        <Helmet>
          <title>
            Mixtape | {item.artist} | {item.album}
          </title>
        </Helmet>
      ))}

      <Container>
        <div style={artist}>
          {data.map((item) => {
            return (
              <div key={item.id}>
                <h3
                  style={{
                    marginBottom: '20px',
                    fontWeight: '700',
                  }}
                >
                  {item.artist}
                </h3>
                <img
                  style={{ height: '500px', width: 'auto' }}
                  src={item.img}
                  alt={item.album}
                  title={item.album}
                />

                <p style={{ marginTop: '20px' }}>
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
            );
          })}
          {data.map((item) => (
            <div style={info}>
              <p style={{ fontSize: '24px', fontFamily: 'Quicksand' }}>
                {item.album} ({item.year})
              </p>

              <p
                style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  fontFamily: 'Quicksand',
                }}
              >
                Track Listing
              </p>

              {item.tracks.map((track, index) => (
                <div key={index}>
                  <p style={{ fontFamily: 'Quicksand' }}>{track}</p>
                </div>
              ))}
            </div>
          ))}

          <div style={{ marginBottom: '20px' }}>
            <a
              style={{ backgroundColor: '#2c2c2c' }}
              href='/list-of-artists'
              class='btn btn-dark'
              role='button'
              aria-pressed='true'
            >
              <i class='fas fa-arrow-left' onclick='history.back()'></i> BACK TO
              ARTISTS
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Artist;
