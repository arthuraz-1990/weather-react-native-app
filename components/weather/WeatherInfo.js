import dayjs from "dayjs";
import { Image, StyleSheet, Text, View } from "react-native"
import WeatherItem from "./WeatherItem";

const WeatherInfo = ({ info }) => {

    const weatherTime = dayjs(info.time ?? info.last_updated);

    const currentDate = weatherTime.format('DD/MM/YYYY');
    const currentHour = weatherTime.format('HH:mm')

    return (
        <View style={styles.info}>
            <WeatherItem style={styles.item}>
                <Text>Data: {currentDate}</Text>
                <Text>Hora: {currentHour}</Text>
            </WeatherItem>
            <WeatherItem style={styles.item}>
                <Text>Temperatura: {info.temp_c} C</Text>
                <Text>Sensação: {info.feelslike_c} C</Text>
            </WeatherItem>
            <WeatherItem style={styles.item}>
                <View style={styles.conditionIconContainer}>
                    <Image style={styles.conditionIcon} source={info.condition.icon}></Image>
                </View>
                <Text>{info.condition.text}</Text>
            </WeatherItem>
            <WeatherItem style={styles.item}>
                <Text>Vento: {info.wind_kph} km/h</Text>
                <Text>Direção: {info.wind_degree} {info.wind_dir}</Text>
            </WeatherItem>
            <WeatherItem style={styles.item}>
                <Text>Chuva Prevista: {info.precip_mm}</Text>
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
        alignItems: 'flex-start'
    },
    item: {
        width: '50%',
        alignItems: 'center'
    },
    conditionIconContainer: {
        height: 200,
        width: 200,
        overflow: 'hidden'
    },
    conditionIcon: {
        width: '100%',
        height: '100%'
    }
});