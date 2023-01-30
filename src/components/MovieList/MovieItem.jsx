import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
function MovieItem({movie}){
    const dispatch = useDispatch();
    const history = useHistory();
     // Runs a saga function that matches up with the unique identifer 'FETCH_ONE_MOVIE'
     // and sends it the movie clicked's id

    const detailPage = () =>{
        dispatch({
            type: 'FETCH_ONE_MOVIE',
            payload: movie.id
        })
        // Sends you to the detail page
        history.push('/details')
    }
    return(
        <>
        <div onClick={detailPage}>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title}/>
        </div>
        
        </>
    )
}
export default MovieItem;