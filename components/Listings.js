import { useEffect, useState } from 'react';

const ACTIONS = ['View', 'Reply'];

const formatAsCurrency = (int) => {
  // Formate integer to currency Format.
  return int
    ? int
        .toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })
        .split('.')[0]
    : 'Wanted';
};

const Listing = (props) => {
  // TODO
  // This should be the component which renders an individual listing to the page

  return (
    <div className='listing'>
      <div className='card'>
        <h3 className='title'>{props.item.title}</h3>
        <div className='card-info'>
          <h3>{formatAsCurrency(props.item.price)}</h3>
          <p>{props.item.location}</p>
        </div>
        {props.item.imgUrl && (
          <img src={props.item.imgUrl} alt={props.item.title} />
        )}
        {/* Show image if image url exists */}
        <p className='description'>{props.item.description}</p>
        <div className='button-group'>
          {ACTIONS.map((btn, index) => {
            return (
              <button
                key={index}
                className='btn'
                onClick={() => console.log(`${btn}: ${props.item.title}`)}
              >
                {btn}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Listings = (props) => {
  // TODO
  // This component should make a request to the api endpoint (props.dataEndpoint)
  // then render the result as set of listings as per the design mocks
  // check props passed in from parent for other values that you may need to use
  const [list, setList] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    //Fetch data from api endpoint.
    try {
      const response = await fetch(
        `http://localhost:3000${props.dataEndpoint}`
      );
      const data = await response.json();
      setList(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // fetch data when Listing page is first rendered.  
  useEffect(() => {
    fetchData();
  }, []);

  // If list exist and the list length is more than 0 then render the list, otherwise show error message.
  const renderedList =
    list && list.length > 0 ? (
      list.map((item) => {
        return <Listing key={item.title} item={item} />;
      })
    ) : (
      <div className='error__result'>
        <h1>Cannot find your result.</h1>
      </div>
    );

  return (
    <div>
      <div className='listings__header'>
        <h1>Search Results</h1>
        <p>
          <span>{list ? list.length : 0} results</span> for
          <span> Ferrari </span>
          in <span>Australia</span>
        </p>
      </div>
      <div className='listings__grid'>
        {!isLoading ? (
          renderedList
        ) : (
          <div className='error__result'>
            <h1>Loading...</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Listings;
