import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Error from './Error';
import No_tours from './no_tours';
import Tours from './tours';

function App() {
  const url = 'https://course-api.com/react-tours-project';

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((tours) => {
        setIsLoading(false);
        setTours(tours);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNotInterested = (id) => {
    setTours((oldTours) => {
      return oldTours.filter((tour) => {
        return tour.id !== id;
      });
    });
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }

  if (tours.length === 0) {
    return <No_tours fetchData={fetchData} />;
  }

  return <Tours tours={tours} handleNotInterested={handleNotInterested} />;
}

export default App;
