import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';
function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>   
        {/* First page */}
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route exact path='/details'>
          <Details />
        </Route>
      </Router>
    </div>
  );
}


export default App;
