import dayjs from "dayjs";
import { Image, StyleSheet, Text, View } from "react-native"
import WeatherItem from "./WeatherItem";
import { FontAwesome5 } from '@expo/vector-icons'; 


const WeatherInfo = ({ info }) => {

    const weatherTime = dayjs(info.time ?? info.last_updated);

    const currentDate = weatherTime.format('DD/MM/YYYY');
    const currentHour = weatherTime.format('HH:mm')

    return (
        <View style={styles.info}>
            <WeatherItem style={styles.item}>
                <FontAwesome5 name="clock" size={24} color="black" />
                <Text>Data: {currentDate}</Text>
                <Text>Hora: {currentHour}</Text>
            </WeatherItem>
            <WeatherItem style={styles.item}>
                <FontAwesome5 name="temperature-high" size={24} color="black" />
                <Text>Temperatura: {info.temp_c} C</Text>
                <Text>Sensação: {info.feelslike_c} C</Text>
            </WeatherItem>
            <WeatherItem style={styles.item}>
                <View style={styles.conditionIconContainer}>
                    <Image style={styles.conditionIcon} src={`https://${info.condition.icon}`}></Image>
                </View>
                <Text>{info.condition.text}</Text>
            </WeatherItem>
            <WeatherItem style={styles.item}>
                <FontAwesome5 name="wind" size={24} color="black" />
                <Text>Vento: {info.wind_kph} km/h</Text>
                <Text>Direção: {info.wind_degree} {info.wind_dir}</Text>
            </WeatherItem>
            <WeatherItem style={styles.item}>
                <FontAwesome5 name="cloud-rain" size={24} color="black" />
                <Text>Chuva Prevista: {info.precip_mm} mm</Text>
            </WeatherItem>
        </View>

    );

}

export default WeatherInfo;

const styles = StyleSheet.create({
    info: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        marginTop: 8,
        rowGap: 3,
        columnGap: 3
    },
    item: {
        width: '48%',
        margin: 'auto',
        alignItems: 'center',
        flexGrow: 1
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
    }
});