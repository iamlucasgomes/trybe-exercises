export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

// action creator que retorna um objeto
const requestMovies = () => ({
  type: REQUEST_MOVIES,
});

// outro action creator que retorna um objeto
const receiveMovies = (movies) => ({
  type: RECEIVE_MOVIES,
  movies,
});

// action creator que retorna uma função, possível por conta do pacote redux-thunk
export function fetchMovies() {
  return (dispatch) => { // thunk declarado
    dispatch(requestMovies());
    return fetch('alguma-api-qualquer.com')
      .then((response) => response.json())
      .then((movies) => dispatch(receiveMovies(movies)));
  };
}

// componente em que você usaria a action creator fetchMovies assíncrona como uma outra qualquer
// ...
class MyConnectedAppToRedux extends Component {
  // ...
  componentDidMount() {
    const { dispatch, fetchMovies } = this.props;
    dispatch(fetchMovies()); // enviando a action fetchMovies
  }
  // ...
}
// ...