import { Song } from "./Song";

export const Songs =({fn,allsongs})=>{
    //map(JS)
    //allsongs(data)--> convert -->jsx
    return(
        <>
            {allsongs.map((currentSong,index)=> <Song fn={fn} key={index} song={currentSong}/>)}
            
        </>
    );
}