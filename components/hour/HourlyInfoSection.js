import { Dimensions, StyleSheet, View } from "react-native"
import WeatherInfo from "../weather/WeatherInfo"
import HourList from "./HourList"

import { FontAwesome5 } from '@expo/vector-icons';
import Colors from "../../constants/Colors";
import CustomText from "../element/CustomText";
import FontSize from "../../constants/FontSize";

const HourlyInfoSection = ({selectedDay, selectedHour, onSelectHour}) => (
    <View style={styles.mainContainer}>
        <View style={styles.hourView}>
            <HourList hourList={selectedDay.hour} selected={selectedHour} onSelectHour={onSelectHour} />
            <View style={styles.infoView}>
                <FontAwesome5 name='info-circle' size={FontSize.getSize('secondary', width)} color={Colors.accent500} />
                <CustomText bold style={styles.infoText}>Selecione a hora para mais informações</CustomText>
            </View>
        </View>
        <View style={styles.weatherView}>
            <WeatherInfo info={selectedHour} />
        </View>
    </View>
)

export default HourlyInfoSection;

const width = Dimensions.get('window').width;

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
        fontSize: FontSize.getSize('secondary', width)
    }
})