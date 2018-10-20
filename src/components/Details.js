import React,{ Component } from 'react';
import ConsolidatedWeather from './ConsolidatedWeather';
const FetchingStyles = {
    height: 327,
};
export default class Details extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            weather: null,
            notFound: false
        }
    }

    getConsolidatedWeather(woeid) {
        fetch(`http://weather.localhost:3232/weather.php?command=location&woeid=${woeid}`)
            .then(response => response.json())
            .then(data =>{
                if (data.length !== 0) {
                    return this.setState({ weather: data, isLoading: false});
                }else{
                    return this.setState({ notFound: true });
                }
            })
    }
    componentWillMount() {
        this.setState({ notFound: false})
    }
    componentDidMount() {
        this.getConsolidatedWeather(this.props.woeid);
    }

    render() {
        const { weather } = this.state;
        if(this.state.isLoading === false){
            let consolidatedWeathers = weather.consolidated_weather;
            if(this.state.notFound === false){
                    return (
                        <div className="row">
                            <div className="col-md-12 text-center mt-5">
                                <h3>{weather.title}</h3>
                            </div>
                        {
                            consolidatedWeathers.map((c,index) => {
                            return <ConsolidatedWeather consolidatedWeather={c} key={index} title={weather.title} />
                        })
                         }
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

// export default withRouter(ConsolidatedWeather)