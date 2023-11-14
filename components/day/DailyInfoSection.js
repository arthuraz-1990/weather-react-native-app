import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'; 
import Colors from "../../constants/Colors";
import FontSize from "../../constants/FontSize";
import Util from "../../util/Util";
import CustomText from "../element/CustomText";
import ScreenSize from "../../constants/ScreenSize";

const iconSizeBreakpoints = {
    xl: 65,
    lg: 50,
    md: 25,
    sm: 20,
    xs: 15
}

const DailyInfoSection = ({ selectedDay }) => {

    const { day, astro } = selectedDay;

    const breakpoint = ScreenSize.getScreenSize(width);

    const iconSize = iconSizeBreakpoints[breakpoint];

    return (
        <ScrollView style={styles.mainContainer} contentContainerStyle={styles.justifyView}>
            <View style={styles.rowView}>
                <View style={styles.info}>
                    <View style={[styles.item, styles.itemInner]}>
                        <View style={[styles.centerAlign, styles.iconView]}>
                            <FontAwesome5 name="temperature-high" size={iconSize} color={Colors.accent500} />
                        </View>
                        <View style={styles.textView}>
                            <CustomText style={[styles.infoText, styles.centerAlign]}>Máxima: {Util.formatNumber(day.maxtemp_c)} °C</CustomText>
                            <CustomText style={[styles.infoText, styles.centerAlign]}>Mínima: {Util.formatNumber(day.mintemp_c)} °C</CustomText>
                            <CustomText style={[styles.infoText, styles.centerAlign]}>Média: {Util.formatNumber(day.avgtemp_c)} °C</CustomText>
                        </View>
                    </View>
                    <View style={[styles.item, styles.itemInner]}>
                        <View style={[styles.centerAlign, styles.iconView]}>
                            <FontAwesome5 name="wind" size={iconSize} color={Colors.accent500} />
                        </View>
                        <CustomText style={[styles.infoText, styles.centerAlign, styles.textView]}>Vento: {Util.formatNumber(day.maxwind_kph)} km/h</CustomText>
                    </View>
                    <View style={[styles.item, styles.itemInner]}>
                        <View style={[styles.centerAlign, styles.iconView]}>
                            <FontAwesome5 name="cloud-rain" size={iconSize} color={Colors.accent500} />
                        </View>
                        <CustomText style={[styles.infoText, styles.centerAlign, styles.textView]}>Chuva Prev.: {Util.formatNumber(day.totalprecip_mm)} mm</CustomText>
                    </View>
                    <View style={[styles.item, styles.itemInner]}>
                        <View style={[styles.centerAlign, styles.iconView]}>
                            <FontAwesome5 name="eye-slash" size={iconSize} color={Colors.accent500} />
                        </View>
                        <CustomText style={[styles.infoText, styles.centerAlign, styles.textView]}>Visibilidade: {Util.formatNumber(day.avgvis_km)} km</CustomText>
                    </View>
                </View>
                <View style={styles.info}>
                    <View style={[styles.item, styles.itemInner]}>
                        <View style={[styles.centerAlign, styles.iconView]}>
                            <MaterialCommunityIcons name="water-percent" size={iconSize} color={Colors.accent500} />
                        </View>
                        <CustomText style={[styles.infoText, styles.centerAlign, styles.textView]}>Umidade: {Util.formatNumber(day.avghumidity)} %</CustomText>
                    </View>
                    <View style={[styles.item, styles.itemInner]}>
                        <View style={[styles.centerAlign, styles.iconView]}>
                            <FontAwesome5 name="sun" size={iconSize} color={Colors.accent500} />
                        </View>
                        <View style={styles.textView}>
                            <CustomText style={[styles.infoText, styles.centerAlign]}>Nascer: {astro.sunrise}</CustomText>
                            <CustomText style={[styles.infoText, styles.centerAlign]}>Pôr: {astro.sunset}</CustomText>
                            <CustomText style={[styles.infoText, styles.centerAlign]}>Índice UV: {Util.formatNumber(day.uv)} %</CustomText>
                        </View>
                    </View>
                    <View style={[styles.item, styles.itemInner]}>
                        <View style={[styles.centerAlign, styles.iconView]}>
                            <FontAwesome5 name="moon" size={iconSize} color={Colors.accent500} />
                        </View>
                        <View style={styles.textView}>
                            <CustomText style={[styles.infoText, styles.centerAlign]}>{Util.translateMoonPhase(astro.moon_phase)}</CustomText>
                            <CustomText style={[styles.infoText, styles.centerAlign]}>Nascer: {astro.moonrise}</CustomText>
                            <CustomText style={[styles.infoText, styles.centerAlign]}>Pôr: {astro.moonset}</CustomText>
                            <CustomText style={[styles.infoText, styles.centerAlign]}>Iluminação: {astro.moon_illumination}%</CustomText>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );

}

export default DailyInfoSection;

const width = Dimensions.get('window').width;

const largerBreakpoint = ScreenSize.getScreenSize(width) in ['lg', 'xl'];

let textFontSize = FontSize.getSize('secondary', width);

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
        flexDirection: 'row',
        alignItems: 'center'
    },
    infoText: {
        color: Colors.accent500,
        fontWeight: '500',
        textAlign: 'center',
        fontSize: textFontSize
    },
    centerAlign: {
        alignSelf: 'center'
    },
    textView: {
        flex: largerBreakpoint ? 7 : 8
    },
    iconView: {
        flex: largerBreakpoint ? 3 : 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
});