// Tela de seleção de horas e mostrando suas informações...

import { useState } from "react";
import HourlyInfoSection from "../components/hour/HourlyInfoSection";
import dayjs from "dayjs";
import { StyleSheet, View } from "react-native";
import SelectScreenHeader from "../components/element/SelectScreenHeader";

const HoursScreen = ({ location, selectedDay, onReturn }) => {

    const currentHourValue = dayjs(selectedDay.last_updated).hour;
    const currentHourForecast = selectedDay.hour.find(h => dayjs(h.time).hour === currentHourValue);
    const [ selectedHour, setSelectedHour ] = useState(currentHourForecast);

    const date = dayjs(selectedDay.date).format('DD/MM/YYYY');

    const onSelectHour = (hour) => {
        setSelectedHour(hour);
    }

    return (
        <View style={styles.mainView}>
            <SelectScreenHeader location={location} onReturn={onReturn} date={date} />
            <HourlyInfoSection selectedDay={selectedDay} selectedHour={selectedHour} onSelectHour={onSelectHour} /> 
        </View>
    )

}

export default HoursScreen;

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        padding: 24,
        marginTop: 30,
        rowGap: 20
    }
})
