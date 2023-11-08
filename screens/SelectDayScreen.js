// Tela de seleção do dia...

import { StyleSheet, View } from "react-native";
import SelectScreenHeader from "../components/element/SelectScreenHeader";
import DayList from "../components/day/DayList";

const SelectDayScreen = ({selectedDay, location, onReturn, onSelectDay, forecastResponse}) => { 
    const { forecastday } = forecastResponse.forecast;

    return (
        <View style={styles.mainContainer}>
            <SelectScreenHeader location={location} onReturn={onReturn} />
            <DayList selected={selectedDay} onSelectDay={onSelectDay} dayList={forecastday} />
        </View>
    )
}


export default SelectDayScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 24,
        width: '100%',
        rowGap: 10
    }
})