import React from "react";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchMovieDetails } from "../../actions";

class Details extends React.Component{
    constructor(props){
        super(props)
        const urlParam = window.location.href.split("/")
        const id = urlParam[urlParam.length -1]
        console.log(id)
        this.state = {
            movieID: id,
            data: {}
        }
    }

    componentDidMount(){
        this.props.onFetchMovieDetails(this.state.movieID);
    }

    componentDidUpdate(prevProps){
        console.log(this.props.movieDetailsData.data)
        const {movieDetailsData} = this.props
        if(prevProps.movieDetailsData.isLoading && !movieDetailsData.isLoading){
            this.setState({data: movieDetailsData.data})
        }


    }
    render(){
        return(
            <div className="bg-gray-400 flex flex-row items-center " style={{ width:'100vw', height:'100vh'}}>
                {/* {console.log(this.state.data)} */}
                <div className='flex flex-row items-center bg-gray-200 py-20'>
                <div className="flex flex-col items-center ml-20 mr-10">
                    
                    {this.props.movieDetailsData.isLoading 
                    ? <h1>Loading...</h1>
                    : 
                    <div >
                    <Link to="/"><button className="p-2 bg-red-600 text-white rounded-lg mb-11">Return</button></Link>
                    <img className='p-4 rounded-xl bg-gray-500' src={this.state.data.Poster} alt="" />
                    </div>
                    }
                   
                </div>
                
                <div className="flex flex-col p-2">
                <h1 className="text-2xl underline">{this.state.data.Title}</h1>
                <h1 className="text-2xl">{this.state.data.Year}</h1>
                <h1>Rated : {this.state.data.Rated}</h1>
                <h1>Released : {this.state.data.Released}</h1>
                <h1>Runtime : {this.state.data.Runtime}</h1>
                <h1>Genre : {this.state.data.Genre}</h1>
                <h1>Director : {this.state.data.Director}</h1>
                <h1>Writer : {this.state.data.Writer}</h1>
                <h1>Actors : {this.state.data.Actors}</h1>
                <h1>Plot : {this.state.data.Plot}</h1>




                </div>
                </div>
                

            </div>
        )
    }
}


const mapDispatchToProps = {
    onFetchMovieDetails : fetchMovieDetails
}

const mapStateToProps = (state)=> ({
    movieDetailsData: state.movieDetails
})


export default connect(mapStateToProps, mapDispatchToProps)(Details)