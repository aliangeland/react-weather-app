import React,{ Component } from 'react';

const iconStyles = {
    width: 55,
    height: 55,
};
export default class Details extends Component{
    constructor(props) {
        super(props);
    }

    getDayName(date){
        let d = new Date(date);
        let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        return days[ d.getDay() ];
    }

    render() {
        let img_src_abbr = this.props.consolidatedWeather.weather_state_abbr;
        let day = this.getDayName(this.props.consolidatedWeather.applicable_date);
        let today = this.getDayName(new Date());
        if(today === day){
            day = "Today";
        }
        return (
            <div className="col-md-4 mt-5">
                <div className="card">
                    <img className="card-img-top mx-auto m-3" style={iconStyles} src={"https://www.metaweather.com/static/img/weather/png/64/"+img_src_abbr+".png"} alt="Card image cap" />
                    <div className="card-body bg-light">
                            <h4 className="card-title">{day}</h4>
                            <p className="card-text">Temp: {this.props.consolidatedWeather.the_temp}</p>
                            <p className="card-text">Minimum Temp: {this.props.consolidatedWeather.min_temp}</p>
                            <p className="card-text">Maximum Temp: {this.props.consolidatedWeather.max_temp}</p>
                    </div>
                </div>
            </div>
        );
    }

}