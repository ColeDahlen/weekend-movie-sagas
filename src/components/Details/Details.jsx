import { useDispatch, useSelector } from 'react-redux';
function Details(){
    const movieSelected = useSelector(store => store.movieClicked)
        return(
            <>
            <h1>Details</h1>
            {
                movieSelected[0] && (
                <>
                <h1>{movieSelected[0].title}</h1>
                <h2>{movieSelected[0].description}</h2>
                <img src={movieSelected[0].poster}/>
                <h2>Genres: </h2>
                <div>
                {
                    movieSelected.map((movieSelect) =>{
                        return(
                            <div>{movieSelect.name}</div>
                        )
                    })
                }
                </div>
                </>
                )
            }
            </>
        )
}
export default Details;