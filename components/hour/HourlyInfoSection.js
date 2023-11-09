import { StyleSheet, Text, View } from "react-native"
import WeatherInfo from "../weather/WeatherInfo"
import HourList from "./HourList"

import { FontAwesome5 } from '@expo/vector-icons';
import Colors from "../../constants/Colors";

const HourlyInfoSection = ({selectedDay, selectedHour, onSelectHour}) => (
    <View style={styles.mainContainer}>
        <View style={styles.hourView}>
            <HourList hourList={selectedDay.hour} selected={selectedHour} onSelectHour={onSelectHour} />
            <View style={styles.infoView}>
                <FontAwesome5 name='info-circle' size={14} color={Colors.accent500} />
                <Text style={styles.infoText}>Selecione a hora para mais informações</Text>
            </View>
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
        marginTop: 3,
        rowGap: 20
    },
    weatherView: {
        flex: 1
    },
    hourView: {
        backgroundColor: Colors.toRgba(Colors.darkMain, 0.7),
        padding: 5,
        borderRadius: 10
    },
    infoView: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 5,
        justifyContent: 'center'
    },
    infoText: {
        color: Colors.accent500,
        fontWeight: '600'
    }
})