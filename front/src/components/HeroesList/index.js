import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getHeroRequestAction } from '../../actions/actionCreators';

const HeroesList = (props) => {
  const { heroes, isFetching, error } = props;

  useEffect(() => {
    props.getHeroRequestAction({ limit: 5, offset: 0 });
  }, []);

  const loadMore = () => {
    props.getHeroRequestAction({
      offset: heroes,
    });
  };

  console.log(heroes);

  return (
    <div>
      <h1>Hero List</h1>
      {isFetching && <p>Loading...</p>}
      {error && <p>Some error</p>}
      <button onClick={loadMore}>Load More Heroes</button>
      {heroes
        ? heroes.map((h) => {
            return <li key={h.id}>{JSON.stringify(h)}</li>;
          })
        : null}
    </div>
  );
};

const mapStateToProps = ({ hero }) => hero;

export default connect(mapStateToProps, { getHeroRequestAction })(HeroesList);
