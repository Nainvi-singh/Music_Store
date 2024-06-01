import { useRef } from "react";

export const Search=({fn})=>{
    const artist =useRef();
    return(
    <>
    <div className="searchName">
        {/* <label>Artist Name</label> */}
        <input ref={artist} type = 'text' className="form-control" placeholder="Search Artist"></input>
        <button className="btn btn-outline-success" onClick={()=>{
            fn(artist.current.value);
        }
        } >Search</button>
        
    </div>
    <br/>
    </>
    );
}