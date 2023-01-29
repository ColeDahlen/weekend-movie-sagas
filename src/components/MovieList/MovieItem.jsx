import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
function MovieItem({movie}){
    const dispatch = useDispatch();
    const history = useHistory();
    const detailPage = () =>{
        dispatch({
            type: 'FETCH_ONE_MOVIE',
            payload: movie.id
        })
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