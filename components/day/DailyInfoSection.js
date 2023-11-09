import { ScrollView, StyleSheet, Text, View } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'; 
import Colors from "../../constants/Colors";
import Util from "../../util/Util";

const DailyInfoSection = ({ selectedDay }) => {

    const { day, astro } = selectedDay;

    const iconSize = 25;

    return (
        <ScrollView style={styles.mainContainer} contentContainerStyle={styles.justifyView}>
            <View style={styles.rowView}>
                <View style={styles.info}>
                    <View style={[styles.item, styles.itemInner]}>
                        <View style={[styles.centerAlign, styles.iconView]}>
                            <FontAwesome5 name="temperature-high" size={iconSize} color={Colors.accent500} />
                        </View>
                        <View style={styles.textView}>
                            <Text style={[styles.infoText, styles.centerAlign]}>Máxima: {Util.formatNumber(day.maxtemp_c)} °C</Text>
                            <Text style={[styles.infoText, styles.centerAlign]}>Mínima: {Util.formatNumber(day.mintemp_c)} °C</Text>
                            <Text style={[styles.infoText, styles.centerAlign]}>Média: {Util.formatNumber(day.avgtemp_c)} °C</Text>
                        </View>
                    </View>
                    <View style={[styles.item, styles.itemInner]}>
                        <View style={[styles.centerAlign, styles.iconView]}>
                            <FontAwesome5 name="wind" size={iconSize} color={Colors.accent500} />
                        </View>
                        <Text style={[styles.infoText, styles.centerAlign, styles.textView]}>Vento: {Util.formatNumber(day.maxwind_kph)} km/h</Text>
                    </View>
                    <View style={[styles.item, styles.itemInner]}>
                        <View style={[styles.centerAlign, styles.iconView]}>
                            <FontAwesome5 name="cloud-rain" size={iconSize} color={Colors.accent500} />
                        </View>
                        <Text style={[styles.infoText, styles.centerAlign, styles.textView]}>Chuva Prev.: {Util.formatNumber(day.totalprecip_mm)} mm</Text>
                    </View>
                    <View style={[styles.item, styles.itemInner]}>
                        <View style={[styles.centerAlign, styles.iconView]}>
                            <FontAwesome5 name="eye-slash" size={iconSize} color={Colors.accent500} />
                        </View>
                        <Text style={[styles.infoText, styles.centerAlign, styles.textView]}>Visibilidade: {Util.formatNumber(day.avgvis_km)} km</Text>
                    </View>
                </View>
                <View style={styles.info}>
                    <View style={[styles.item, styles.itemInner]}>
                        <View style={[styles.centerAlign, styles.iconView]}>
                            <MaterialCommunityIcons name="water-percent" size={iconSize} color={Colors.accent500} />
                        </View>
                        <Text style={[styles.infoText, styles.centerAlign, styles.textView]}>Umidade: {Util.formatNumber(day.avghumidity)} %</Text>
                    </View>
                    <View style={[styles.item, styles.itemInner]}>
                        <View style={[styles.centerAlign, styles.iconView]}>
                            <FontAwesome5 name="sun" size={iconSize} color={Colors.accent500} />
                        </View>
                        <View style={styles.textView}>
                            <Text style={[styles.infoText, styles.centerAlign]}>Nascer: {astro.sunrise}</Text>
                            <Text style={[styles.infoText, styles.centerAlign]}>Pôr: {astro.sunset}</Text>
                            <Text style={[styles.infoText, styles.centerAlign]}>Índice UV: {Util.formatNumber(day.uv)} %</Text>
                        </View>
                    </View>
                    <View style={[styles.item, styles.itemInner]}>
                        <View style={[styles.centerAlign, styles.iconView]}>
                            <FontAwesome5 name="moon" size={iconSize} color={Colors.accent500} />
                        </View>
                        <View style={styles.textView}>
                            <Text style={[styles.infoText, styles.centerAlign]}>{Util.translateMoonPhase(astro.moon_phase)}</Text>
                            <Text style={[styles.infoText, styles.centerAlign]}>Nascer: {astro.moonrise}</Text>
                            <Text style={[styles.infoText, styles.centerAlign]}>Pôr: {astro.moonset}</Text>
                            <Text style={[styles.infoText, styles.centerAlign]}>Iluminação: {astro.moon_illumination}%</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );

}

export default DailyInfoSection;

const styles = StyleSheet.create({
    mainContainer: {
        // flex: 1,
        width: '100%'
    },
    justifyView: {
        flex: 1,
        justifyContent: 'center'
    },
    rowView: {
        flexDirection: 'row', 
        flex: 1,
        columnGap: 5,
        backgroundColor: Colors.toRgba(Colors.darkMain, 0.7),
        borderRadius: 10,
        padding: 15
    },
    info: {
        flex: 1,
        marginTop: 3,
        justifyContent: 'space-around',
        rowGap: 20,
    },
    item: {
        alignSelf: 'center',
    },
    itemInner: {
        width: '100%',
        flexDirection: 'row'
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
        fontSize: 13
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