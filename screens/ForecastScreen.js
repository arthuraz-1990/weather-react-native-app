import dayjs from "dayjs";
import { useState } from "react"
import { StyleSheet, View } from "react-native";
import DayList from "../components/day/DayList";
import LocationInfo from "../components/location/LocationInfo";
import WeatherTypeButton from "../components/weather/WeatherTypeButton";
import HourlyInfoSection from "../components/hour/HourlyInfoSection";
import DailyInfoSection from "../components/day/DailyInfoSection";

const ForecastScreen = ({ forecastResponse, location, onShowSearch }) => {

    const { forecast, current } = forecastResponse;

    const [ selectedDay, setSelectedDay ] = useState(forecast.forecastday[0]);

    const [ section, setSection ] = useState('day');

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

    const onSelectType = (type) => {
        if (type !== section)
            setSection(type);
    }

    return (
        <View style={styles.mainView}>
            <LocationInfo info={location} onShowSearch={onShowSearch}/>
            <View style={styles.dayView}>
                <DayList dayList={forecast.forecastday} selected={selectedDay} onSelectDay={onSelectDay} />
            </View>
            <View style={styles.sectionSelect}>
                <WeatherTypeButton label='Dia' current={section} onSelect={onSelectType} type='day' /> 
                <WeatherTypeButton label='Hora' current={section} onSelect={onSelectType} type='hour' />
            </View>
            { section === 'hour' && <HourlyInfoSection selectedDay={selectedDay} selectedHour={selectedHour} onSelectHour={onSelectHour} /> }
            { section === 'day' && <DailyInfoSection selectedDay={selectedDay} /> }
            
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
        padding: 12,
        width: '100%'
    },
    dayView: {
        height: 80
    },
    sectionSelect: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})