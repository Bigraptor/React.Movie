import React, {Component} from "react";
import "../css/moviecard.css";

class Moviecard extends Component{
    render(){
        return (
            <div id = "movie_card">
                <div id = "movie_poster">
                    <Poster poster = {this.props.poster}/>
                </div>
                <div id = "movie_detail">
                    <div id = "movie_title">
                        {this.props.title}
                    </div>
                    <div id = "movie_genres">
                        {this.props.genres.map((genre,i)=>{
                        return <Genre genres = {genre} key = {i}/>
                        })}
                    </div>
                    <div id = "movie_synop">
                        {this.props.synopsis}
                    </div>
                </div>
            </div>
        );
    }
}

function Poster({poster}){
    return <img src = {poster} />
}

function Genre({genres}){
    return <span>{genres}</span>
}

Moviecard.defaultProps = {
    title : "",
    poster : "",
    synopsis : "",
    genres : ""
}

export default Moviecard;