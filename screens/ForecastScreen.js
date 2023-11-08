import { StyleSheet, View } from "react-native";
import LocationInfo from "../components/location/LocationInfo";
import DailyInfoSection from "../components/day/DailyInfoSection";
import SelectedDayItem from "../components/day/SelectedDayItem";

const ForecastScreen = ({ selectedDay, location, onShowSearch, onShowDays, onShowHour }) => 
    <View style={styles.mainView}>
        <LocationInfo info={location} onShowSearch={onShowSearch}/>
        <View style={styles.dayView}>
            <SelectedDayItem selected={selectedDay} onShowDays={onShowDays} onShowHour={onShowHour} />
        </View>
        <DailyInfoSection selectedDay={selectedDay} />
    </View>


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
        height: '40%'
    },
    sectionSelect: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})