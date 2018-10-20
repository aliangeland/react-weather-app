import React,{ Component } from 'react';
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';

const iconStyles = {
    width: 55,
    height: 55,
};
const FetchingStyles = {
    height: 327,
};
class Weather extends Component{

    constructor(props) {
        super(props);
        this.state = {
            cityName: this.props.city,
            isLoading: true,
            weather: null,
            notFound: false

        }
    }

    getWeather(city) {
        fetch(`http://weather.localhost:3232/weather.php?command=search&keyword=${city}`)
            .then(response => response.json())
            .then(data =>{
                if (data === undefined || data.length === 0) {
                    return this.setState({ notFound: true, isLoading: false });
                }else{
                    return fetch(`http://weather.localhost:3232/weather.php?command=location&woeid=${data[0].woeid}`).then(response =>{
                        if(response.ok === true){
                            return response = response.json();
                        }}).then(data => this.setState({ weather: data, isLoading: false }));}
            })
    }
    componentWillMount() {
        this.setState({ notFound: false, isLoading: true })
    }
    componentDidMount() {
        this.getWeather(this.state.cityName);
        this.setState({ weather: null, isLoading: true })
    }

    render() {
        const { weather } = this.state;
        if(this.state.isLoading === false){
            if(this.state.notFound === false){
                console.log(weather.consolidated_weather[0]);
                let img_src_abbr = weather.consolidated_weather[0].weather_state_abbr;
                return (
                    <div className="col-md-4 mt-5">
                        <div className="card">
                            <img className="card-img-top mx-auto m-3" style={iconStyles} src={"https://www.metaweather.com/static/img/weather/png/64/"+img_src_abbr+".png"} alt="Card image cap" />
                            <div className="card-body bg-light">
                                <h4 className="card-title">{weather.title}</h4>
                                <p className="card-text">Temp: {weather.consolidated_weather[0].the_temp}</p>
                                <p className="card-text">Minimum Temp: {weather.consolidated_weather[0].min_temp}</p>
                                <p className="card-text">Maximum Temp: {weather.consolidated_weather[0].max_temp}</p>
                                <Link className="btn btn-info" to={"/weather/"+weather.woeid}>Details</Link>
                            </div>
                        </div>
                    </div>
                );
            }else{
                return (
                    <div className="col-md-12 mt-5 mx-auto">
                        <span>No results were found. Try changing the keyword!</span>
                    </div>
                );
            }
        }else{
            return(
                <div className="col-md-4 mt-5">
                    <div className="card" style={FetchingStyles}>
                        <div className="card-body bg-light text-center">
                            <h4 className="card-title">Fetching Content</h4>
                            <p className="card-text">...</p>
                        </div>
                    </div>
                </div>
            )
        }


    }

}

export default withRouter(Weather)