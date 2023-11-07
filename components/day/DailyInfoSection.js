import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'; 
import WeatherItem from "../weather/WeatherItem";
import Colors from "../../constants/Colors";
import Util from "../../util/Util";
import dayjs from "dayjs";

const DailyInfoSection = ({ selectedDay }) => {

    const { day, astro } = selectedDay;

    const weatherTime = dayjs(selectedDay.date);

    const currentDate = weatherTime.format('DD/MM/YYYY');
    const iconSize = 30;

    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.info}>
                <WeatherItem style={styles.item} childrenStyle={styles.itemInner}>
                    <View style={[styles.centerAlign, styles.iconView]}>
                        <FontAwesome5 name="clock" size={iconSize} color={Colors.accent500} />
                    </View>
                    <Text style={[styles.infoText, styles.centerAlign, styles.textView]}>Data: {currentDate}</Text>
                </WeatherItem>
                <WeatherItem style={styles.item} childrenStyle={styles.itemInner}>
                    <View style={[styles.centerAlign, styles.iconView]}>
                        <FontAwesome5 name="temperature-high" size={iconSize} color={Colors.accent500} />
                    </View>
                    <View style={styles.textView}>
                        <Text style={[styles.infoText, styles.centerAlign]}>Máxima: {Util.formatNumber(day.maxtemp_c)} °C</Text>
                        <Text style={[styles.infoText, styles.centerAlign]}>Mínima: {Util.formatNumber(day.mintemp_c)} °C</Text>
                        <Text style={[styles.infoText, styles.centerAlign]}>Média: {Util.formatNumber(day.avgtemp_c)} °C</Text>
                    </View>
                </WeatherItem>
                <WeatherItem style={styles.item} childrenStyle={styles.itemInner}>
                    <View style={[styles.conditionIconContainer, styles.iconView]}>
                        <Image style={styles.conditionIcon} src={`https://${day.condition.icon}`}></Image>
                    </View>
                    <Text style={[styles.infoText, styles.centerAlign, styles.textView]}>{day.condition.text}</Text>
                </WeatherItem>
                <WeatherItem style={styles.item} childrenStyle={styles.itemInner}>
                    <View style={[styles.centerAlign, styles.iconView]}>
                        <FontAwesome5 name="wind" size={iconSize} color={Colors.accent500} />
                    </View>
                    <Text style={[styles.infoText, styles.centerAlign, styles.textView]}>Vento: {Util.formatNumber(day.maxwind_kph)} km/h</Text>
                </WeatherItem>
                <WeatherItem style={styles.item} childrenStyle={styles.itemInner}>
                    <View style={[styles.centerAlign, styles.iconView]}>
                        <FontAwesome5 name="cloud-rain" size={iconSize} color={Colors.accent500} />
                    </View>
                    <Text style={[styles.infoText, styles.centerAlign, styles.textView]}>Chuva Prevista: {Util.formatNumber(day.totalprecip_mm)} mm</Text>
                </WeatherItem>
                <WeatherItem style={styles.item} childrenStyle={styles.itemInner}>
                    <View style={[styles.centerAlign, styles.iconView]}>
                        <FontAwesome5 name="eye-slash" size={iconSize} color={Colors.accent500} />
                    </View>
                    <Text style={[styles.infoText, styles.centerAlign, styles.textView]}>Visibilidade: {Util.formatNumber(day.avgvis_km)} km</Text>
                </WeatherItem>
                <WeatherItem style={styles.item} childrenStyle={styles.itemInner}>
                    <View style={[styles.centerAlign, styles.iconView]}>
                        <MaterialCommunityIcons name="water-percent" size={iconSize} color={Colors.accent500} />
                    </View>
                    <Text style={[styles.infoText, styles.centerAlign, styles.textView]}>Umidade: {Util.formatNumber(day.avghumidity)} %</Text>
                </WeatherItem>
                <WeatherItem style={styles.item} childrenStyle={styles.itemInner}>
                    <View style={[styles.centerAlign, styles.iconView]}>
                        <FontAwesome5 name="sun" size={iconSize} color={Colors.accent500} />
                    </View>
                    <View style={styles.textView}>
                        <Text style={[styles.infoText, styles.centerAlign]}>Nascer Sol: {astro.sunrise}</Text>
                        <Text style={[styles.infoText, styles.centerAlign]}>Pôr do Sol: {astro.sunset}</Text>
                        <Text style={[styles.infoText, styles.centerAlign]}>Índice UV: {Util.formatNumber(day.uv)} %</Text>
                    </View>
                </WeatherItem>
                <WeatherItem style={styles.item} childrenStyle={styles.itemInner}>
                    <View style={[styles.centerAlign, styles.iconView]}>
                        <FontAwesome5 name="moon" size={iconSize} color={Colors.accent500} />
                    </View>
                    <View style={styles.textView}>
                        <Text style={[styles.infoText, styles.centerAlign]}>Nascer Lua: {astro.moonrise}</Text>
                        <Text style={[styles.infoText, styles.centerAlign]}>Pôr da Lua: {astro.moonset}</Text>
                        <Text style={[styles.infoText, styles.centerAlign]}>Fase da Lua: {Util.translateMoonPhase(astro.moon_phase)}</Text>
                        <Text style={[styles.infoText, styles.centerAlign]}>Iluminação: {astro.moon_illumination}%</Text>
                    </View>
                </WeatherItem>
            </View>
        </ScrollView>
    );

}

export default DailyInfoSection;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%'
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
    itemInner: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    conditionIconContainer: {
        height: 55,
        width: 55,
        alignSelf: 'center',
        alignContent: 'flex-start',
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
    textView: {
        width: '80%'
    },
    iconView: {
        flex: 1,
        justifyContent: 'center'
    }
});