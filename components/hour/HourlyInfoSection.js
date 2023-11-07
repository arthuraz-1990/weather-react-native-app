import { StyleSheet, View } from "react-native"
import WeatherInfo from "../weather/WeatherInfo"
import HourList from "./HourList"

const HourlyInfoSection = ({selectedDay, selectedHour, onSelectHour}) => (
    <View style={styles.mainContainer}>
        <View style={styles.hourView}>
            <HourList hourList={selectedDay.hour} selected={selectedHour} onSelectHour={onSelectHour} />
        </View>
        <View style={styles.weatherView}>
            <WeatherInfo info={selectedHour} />
        </View>
    </View>
)

export default HourlyInfoSection;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, 
        marginTop: 3
    },
    hourView: {
        height: 65
    },
    weatherView: {
        flex: 1
    }
})