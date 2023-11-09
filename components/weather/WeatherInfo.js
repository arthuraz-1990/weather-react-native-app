import dayjs from "dayjs";
import { Image, ScrollView, StyleSheet, View } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons'; 
import Colors from "../../constants/Colors";
import Util from "../../util/Util";
import CustomText from "../element/CustomText";


const WeatherInfo = ({ info }) => {

    const weatherTime = dayjs(info.time ?? info.last_updated);

    const currentDate = weatherTime.format('DD/MM/YYYY');
    const currentHour = weatherTime.format('HH:mm');
    const iconSize = 36;

    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.containerBkg}>
                <View style={styles.item}>
                    <View style={styles.centerAlign}>
                        <FontAwesome5 name="clock" size={iconSize} color={Colors.accent500} />
                    </View>
                    <CustomText bold style={[styles.infoText, styles.centerAlign]}>Data: {currentDate}</CustomText>
                    <CustomText bold style={[styles.infoText, styles.centerAlign]}>Hora: {currentHour}</CustomText>
                </View>
                <View style={styles.rowInfo}>
                    <View style={styles.info}>
                        <View style={styles.item}>
                            <View style={styles.centerAlign}>
                                <FontAwesome5 name="temperature-high" size={iconSize} color={Colors.accent500} />
                            </View>
                            <CustomText bold style={[styles.infoText, styles.centerAlign]}>Temperatura: {Util.formatNumber(info.temp_c)} °C</CustomText>
                            <CustomText bold style={[styles.infoText, styles.centerAlign]}>Sensação: {Util.formatNumber(info.feelslike_c)} °C</CustomText>
                        </View>
                        <View style={[styles.item, styles.iconItem]}>
                            <View style={styles.conditionIconContainer}>
                                <Image style={styles.conditionIcon} src={`https://${info.condition.icon}`}></Image>
                            </View>
                            <CustomText bold style={[styles.infoText, styles.centerAlign]}>{info.condition.text}</CustomText>
                        </View>
                    </View>
                    <View style={styles.info}>
                        <View style={styles.item}>
                            <View style={styles.centerAlign}>
                                <FontAwesome5 name="wind" size={iconSize} color={Colors.accent500} />
                            </View>
                            <CustomText bold style={[styles.infoText, styles.centerAlign]}>Vento: {Util.formatNumber(info.wind_kph)} km/h</CustomText>
                            <CustomText bold style={[styles.infoText, styles.centerAlign]}>Direção: {info.wind_degree} {info.wind_dir}</CustomText>
                        </View>
                        <View style={styles.item}>
                            <View style={styles.centerAlign}>
                                <FontAwesome5 name="cloud-rain" size={iconSize} color={Colors.accent500} />
                            </View>
                            <CustomText bold style={[styles.infoText, styles.centerAlign]}>Chuva Prevista: {Util.formatNumber(info.precip_mm)} mm</CustomText>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>

    );

}

export default WeatherInfo;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 10
    },
    containerBkg: {
        paddingTop: 15,
        backgroundColor: Colors.toRgba(Colors.darkMain, 0.7),
        borderRadius: 10
    },
    rowInfo: {
        flexDirection: 'row',
        flex: 1,    
        padding: 10,
        borderRadius: 10
    },
    info: {
        flex: 1,
        marginTop: 8,
        rowGap: 15
    },
    item: {
        flex: 1,
        alignSelf: 'center',
        rowGap: 3
    },
    iconItem: {
        rowGap: 0
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
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 13
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