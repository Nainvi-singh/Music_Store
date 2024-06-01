


export const Player=({fn,song})=>{
    return(
        <div>

            <button onClick={()=>{
                fn(false,null);
            }} className="btn btn-outline-secondary">Back to Songs</button>
            <br/>
            <br/>
            <img src={song.artworkUrl100} alt="img"/>
            <h3>{song?.collectionName}</h3>
            <p>Singer Name:{song?.artistName}</p>
            <br/>
            <br/>
            <audio controls>
                <source src={song?.previewUrl} type="audio/mp4"/>
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}