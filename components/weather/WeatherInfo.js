import dayjs from "dayjs";
import { Dimensions, Image, ScrollView, StyleSheet, View } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons'; 
import Colors from "../../constants/Colors";
import Util from "../../util/Util";
import CustomText from "../element/CustomText";
import FontSize from "../../constants/FontSize";
import ScreenSize from "../../constants/ScreenSize";


const WeatherInfo = ({ info }) => {

    const weatherTime = dayjs(info.time ?? info.last_updated);

    const currentDate = weatherTime.format('DD/MM/YYYY');
    const currentHour = weatherTime.format('HH:mm');
    const iconSize = FontSize.getSize('large', width);

    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.containerBkg}>
                
                
                <View style={styles.rowInfo}>
                    <View style={styles.info}>
                        <View style={styles.item}>
                            <View style={[styles.centerAlign, styles.iconContainer]}>
                                <FontAwesome5 name="clock" size={iconSize} color={Colors.accent500} />
                            </View>
                            <CustomText bold style={[styles.infoText, styles.centerAlign]}>Data: {currentDate}</CustomText>
                            <CustomText bold style={[styles.infoText, styles.centerAlign]}>Hora: {currentHour}</CustomText>
                        </View>
                        <View style={styles.item}>
                            <View style={[styles.centerAlign, styles.iconContainer]}>
                                <FontAwesome5 name="temperature-high" size={iconSize} color={Colors.accent500} />
                            </View>
                            <CustomText bold style={[styles.infoText, styles.centerAlign]}>Temperatura: {Util.formatNumber(info.temp_c)} °C</CustomText>
                            <CustomText bold style={[styles.infoText, styles.centerAlign]}>Sensação: {Util.formatNumber(info.feelslike_c)} °C</CustomText>
                        </View>
                        <View style={styles.item}>
                            <View style={[styles.centerAlign, styles.iconContainer]}>
                                <FontAwesome5 name="sun" size={iconSize} color={Colors.accent500} />
                            </View>
                            <CustomText bold style={[styles.infoText, styles.centerAlign]}>Índice UV: {info.uv}</CustomText>
                        </View>
                    </View>
                    <View style={styles.info}>
                        <View style={[styles.item, styles.iconItem]}>
                            <View style={styles.conditionIconContainer}>
                                <Image style={styles.conditionIcon} src={`https://${info.condition.icon}`}></Image>
                            </View>
                            <CustomText bold style={[styles.infoText, styles.centerAlign]}>{info.condition.text}</CustomText>
                        </View>
                        <View style={styles.item}>
                            <View style={[styles.centerAlign, styles.iconContainer]}>
                                <FontAwesome5 name="wind" size={iconSize} color={Colors.accent500} />
                            </View>
                            <CustomText bold style={[styles.infoText, styles.centerAlign]}>Vento: {Util.formatNumber(info.wind_kph)} km/h</CustomText>
                            <CustomText bold style={[styles.infoText, styles.centerAlign]}>Direção: {info.wind_degree} {info.wind_dir}</CustomText>
                        </View>
                        <View style={styles.item}>
                            <View style={[styles.centerAlign, styles.iconContainer]}>
                                <FontAwesome5 name="cloud-rain" size={iconSize} color={Colors.accent500} />
                            </View>
                            <CustomText bold style={[styles.infoText, styles.centerAlign]}>Acumulado: {Util.formatNumber(info.precip_mm)} mm</CustomText>
                            <CustomText bold style={[styles.infoText, styles.centerAlign]}>Chance de Chuva: {info.chance_of_rain} %</CustomText>
                        </View>
                        
                    </View>
                </View>
            </View>
        </ScrollView>

    );

}

export default WeatherInfo;

const width = Dimensions.get('window').width;

const breakpoint = ScreenSize.getScreenSize(width);

const conditionIconSize = {
    xl: 80,
    lg: 70,
    md: 60,
    sm: 50,
    xs: 45
}

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
        rowGap: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconContainer: {
        marginBottom: 4
    },
    conditionIconContainer: {
        height: conditionIconSize[breakpoint],
        width: conditionIconSize[breakpoint],
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
        fontSize: FontSize.getSize('secondary', width)
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