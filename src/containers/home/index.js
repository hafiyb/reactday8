import React from "react"
import Moviecard from "../../components/moviecard"
import { connect } from "react-redux"
import { fetchMovie } from "../../actions"

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            movieList : [],
        }
    }

    componentDidMount(){
        const {movieData} = this.props
        // console.log('more than one')
        // console.log(this.props.movieData)
        // console.log(movieData)
        if(Object.keys(movieData.data).length > 0){
            this.setState({movieList : movieData.data.Search})
            
        }

    }

    componentDidUpdate(prevProps) {
        const {movieData} = this.props
        if(prevProps.movieData.isLoading && !movieData.isLoading){
            this.setState({movieList : movieData.data.Search})
        }
    }

    movieSubmit(){
        const search = this._searchInput.value
        if(search !== ''){
            this.props.onFetchMovie(search)
            this._searchInput.value = ''
        }
    }

    render(){
        return(
            <div className="bg-gray-400 flex flex-col items-center static" style={{ width:'100vw'}}>
                <div className="flex flex-row py-5 px-10 bg-gray-900 text-white justify-between items-center w-full">
                    <h1 className="text-xl">Movies here</h1>
                    <div>
                    <input className="p-3 rounded-lg" type="text" placeholder="Search..." ref={(a) => this._searchInput = a}/>
                    <button className="p-3 border-2 rounded-lg border-black bg-red-600 text-white" onClick={() => this.movieSubmit()}>Search!</button>
                    </div> 
                </div>
                <div className=" w-3/4 h-full m-10 rounded-3xl flex flex-row flex-wrap">
                    {console.log(this.state.movieList)}
                    {this.state.movieList.map(list => {

                       return <Moviecard title={list.Title} type={list.Type} year={list.Year} image={list.Poster} id={list.imdbID}/>
                    })}
                    {/* <Moviecard title={list.Title} director={list.Director} year={list.Year} genre={list.Genre} /> */}
                    <Moviecard/>


                </div>
            </div>
        )
    }

}

const mapDispatchToProps = {
    onFetchMovie : fetchMovie
}

const mapStateToProps = (state)=> ({
    movieData : state.movie
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)