import { useSelector } from 'react-redux';
import './Details.css'
function Details(){
    // Grabs the global state of the movie selected
    const movieSelected = useSelector(store => store.movieClicked)
        return(
            <div className='details'>
            <h1>Details</h1>
            {
                movieSelected[0] && (
                <>
                <div>{movieSelected[0].title}</div>
                <div>{movieSelected[0].description}</div>
                <img src={movieSelected[0].poster}/>
                <h2>Genres: </h2>
                <div>
                {
                    // Loops through the array, but only returns movieSelect.name 
                    // because its the only thing that differs in the array
                    movieSelected.map((movieSelect) =>{
                        return(
                            <div key={movieSelect.id}>{movieSelect.name}</div>
                        )
                    })
                }
                </div>
                </>
                )
            }
            </div>
        )
}
export default Details;