import dayjs from "dayjs";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import WeatherItem from "./WeatherItem";
import { FontAwesome5 } from '@expo/vector-icons'; 
import Colors from "../../constants/Colors";
import Util from "../../util/Util";


const WeatherInfo = ({ info }) => {

    const weatherTime = dayjs(info.time ?? info.last_updated);

    const currentDate = weatherTime.format('DD/MM/YYYY');
    const currentHour = weatherTime.format('HH:mm');
    const iconSize = 36;

    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.info}>
                <WeatherItem style={styles.item}>
                    <View style={styles.centerAlign}>
                        <FontAwesome5 name="clock" size={iconSize} color={Colors.accent500} />
                    </View>
                    <Text style={[styles.infoText, styles.centerAlign]}>Data: {currentDate}</Text>
                    <Text style={[styles.infoText, styles.centerAlign]}>Hora: {currentHour}</Text>
                </WeatherItem>
                <WeatherItem style={styles.item}>
                    <View style={styles.centerAlign}>
                        <FontAwesome5 name="temperature-high" size={iconSize} color={Colors.accent500} />
                    </View>
                    <Text style={[styles.infoText, styles.centerAlign]}>Temperatura: {Util.formatNumber(info.temp_c)} °C</Text>
                    <Text style={[styles.infoText, styles.centerAlign]}>Sensação: {Util.formatNumber(info.feelslike_c)} °C</Text>
                </WeatherItem>
                <WeatherItem style={styles.item}>
                    <View style={styles.conditionIconContainer}>
                        <Image style={styles.conditionIcon} src={`https://${info.condition.icon}`}></Image>
                    </View>
                    <Text style={[styles.infoText, styles.centerAlign]}>{info.condition.text}</Text>
                </WeatherItem>
                <WeatherItem style={styles.item}>
                    <View style={styles.centerAlign}>
                        <FontAwesome5 name="wind" size={iconSize} color={Colors.accent500} />
                    </View>
                    <Text style={[styles.infoText, styles.centerAlign]}>Vento: {Util.formatNumber(info.wind_kph)} km/h</Text>
                    <Text style={[styles.infoText, styles.centerAlign]}>Direção: {info.wind_degree} {info.wind_dir}</Text>
                </WeatherItem>
                <WeatherItem style={styles.item}>
                    <View style={styles.centerAlign}>
                        <FontAwesome5 name="cloud-rain" size={iconSize} color={Colors.accent500} />
                    </View>
                    <Text style={[styles.infoText, styles.centerAlign]}>Chuva Prevista: {Util.formatNumber(info.precip_mm)} mm</Text>
                </WeatherItem>
            </View>
        </ScrollView>

    );

}

export default WeatherInfo;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    info: {
        flex: 1,
        marginTop: 8,
        rowGap: 7
    },
    item: {
        width: '60%',
        alignSelf: 'center',
        rowGap: 3
    },
    conditionIconContainer: {
        height: 55,
        width: 55,
        alignSelf: 'center',
        overflow: 'hidden'
    },
    conditionIcon: {
        width: '100%',
        height: '100%'
    },
    infoText: {
        color: Colors.accent500,
        fontWeight: '500',
        textAlign: 'center',
        fontSize: 12
    },
    centerAlign: {
        alignSelf: 'center'
    },
    itemInner: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textView: {
        width: '80%'
    }
});