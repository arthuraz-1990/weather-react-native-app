import dayjs from "dayjs";
import { useState } from "react"
import { StyleSheet, View } from "react-native";
import DayList from "../components/day/DayList";
import HourList from "../components/hour/HourList";
import WeatherInfo from "../components/weather/WeatherInfo";
import LocationInfo from "../components/location/LocationInfo";

const ForecastScreen = ({ forecastResponse, location, onShowSearch }) => {

    const { forecast, current } = forecastResponse;

    const [ selectedDay, setSelectedDay ] = useState(forecast.forecastday[0]);

    const currentHourValue = dayjs(current.last_updated).hour;
    const currentHourForecast = selectedDay.hour.find(h => dayjs(h.time).hour === currentHourValue);
    const [ selectedHour, setSelectedHour ] = useState(currentHourForecast);

    const onSelectDay = (day) => {
        setSelectedDay(day);
        setSelectedHour(day.hour[0]);
    }

    const onSelectHour = (hour) => {
        setSelectedHour(hour);
    }

    return (
        <View style={styles.mainView}>
            <LocationInfo info={location} onShowSearch={onShowSearch}/>
            <View style={styles.dayView}>
                <DayList dayList={forecast.forecastday} selected={selectedDay} onSelectDay={onSelectDay} />
            </View>
            <View style={styles.hourView}>
                <HourList hourList={selectedDay.hour} selected={selectedHour} onSelectHour={onSelectHour} />
            </View>
            <View style={styles.weatherView}>
                <WeatherInfo info={selectedHour} />
            </View>
        </View>
    )
}

export default ForecastScreen;

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        rowGap: 8,
        marginTop: 28,
        marginHorizontal: 12,
        padding: 12
    },
    dayView: {
        margin: 'auto'
    },
    hourView: {
        height: 65
    },
    weatherView: {
        flex: 1
    }
})