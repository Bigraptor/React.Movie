import React, {Component} from "react";
import Moviecard from "./moviecard.js";
import "../css/movie.css";

class Movie extends Component{

    constructor(props){
        super(props);
        this.state = {};
        
        this._api = this._api.bind(this);
        this._process = this._process.bind(this);
        this._renderMovie = this._renderMovie.bind(this);
    };

    componentDidMount(){
        this._process();
    };
    
    _renderMovie=() => {
        const mov = this.state.movie.map(a=>{
            return <Moviecard key = {a.id}
                            title = {a.title}
                            poster = {a.medium_cover_image}
                            synopsis = {a.synopsis}
                            genres = {a.genres}/>
       });
       return mov;
    };

    _api(){
        return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
                .then((a)=>a.json())
                .then((json)=> json.data.movies);
    };

    async _process(){
        const movie = await this._api();
        this.setState({
            movie
        });
        console.log(this.state.movie);
    };

    render(){
        return(
            <div id = "movie">
                {(this.state.movie)? this._renderMovie() : "Loading"}
            </div>
        );
    }
}

export default Movie;