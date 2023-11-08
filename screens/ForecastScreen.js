import { StyleSheet, View } from "react-native";
import LocationInfo from "../components/location/LocationInfo";
import DailyInfoSection from "../components/day/DailyInfoSection";
import SelectedDayItem from "../components/day/SelectedDayItem";

const ForecastScreen = ({ selectedDay, location, onShowSearch, onShowDays, onShowHour }) => (
    <View style={styles.mainView}>
        <LocationInfo info={location} onShowSearch={onShowSearch}/>
        <View style={styles.middleView}>
            <View style={styles.dayView}>
                <SelectedDayItem selected={selectedDay} onShowDays={onShowDays} onShowHour={onShowHour} />
            </View>
            <View style={styles.infoView}>
                <DailyInfoSection selectedDay={selectedDay} />
            </View>
        </View>
    </View>
)


export default ForecastScreen;

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        rowGap: 8,
        marginTop: 12,
        marginBottom: 35,
        marginHorizontal: 12,
        padding: 12,
        width: '100%'
    },
    middleView: {
        flex: 1,
        rowGap: 10,
        justifyContent: 'space-around'
    },
    dayView: {
        height: '40%',
        width: '100%'
    },
    infoView: {
        flex: 1,
        justifyContent: 'center',
        width: '100%'
    }
})