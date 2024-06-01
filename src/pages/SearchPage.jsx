import { useEffect, useState } from "react";
import { Search } from "../components/Search"
import { Songs } from "../components/Songs";
import { getSongs } from "../sevices/api-client";
import { Player } from "../components/Player";

export const SearchPage=()=>{
    const [allSongs,setSongs]=useState([]);
    const [flag,setFlag]=useState(false);
    const [song,setPlayerSong]=useState(null);

    const loadSongs=async()=>{
        setSongs(await getSongs('Latest Songs'));
    }
    useEffect(()=>{
        loadSongs();
    },[])

    const togglePlayer=(flag,songarg)=>{
        setPlayerSong(songarg);
        setFlag(flag);
    }

    const getArtistName=async (artistName)=>{
        console.log('Rec Artist Name ',artistName);
        setSongs(await getSongs(artistName));
    }
    const jsx=<>
        <Search fn={getArtistName} />
       <Songs fn={togglePlayer} allsongs={allSongs}/>;
    </>
    return(
    <div className="container">
        
        <nav className="navbar bg-body-tertiary">
        <div className="container">
            <a className="navbar-brand" href="@">
            <h3>MUSIC STORE</h3>
            </a>

        </div>
        </nav>
        <br/>
        {flag?<Player fn={togglePlayer} song={song}/>:jsx}
    </div>
    );
}