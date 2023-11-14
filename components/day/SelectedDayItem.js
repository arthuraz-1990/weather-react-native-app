import { Dimensions, Image, StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";
import Util from "../../util/Util";
import dayjs from "dayjs";
import { FontAwesome5 } from '@expo/vector-icons';
import CustomButton from "../element/CustomButton";
import CustomText from "../element/CustomText";
import FontSize from "../../constants/FontSize";
import ScreenSize from "../../constants/ScreenSize";

const SelectedDayItem = ({ selected, onShowDays, onShowHour }) => {
    const { day } = selected;
    const date = dayjs(selected.date).format('DD/MM/YYYY');

    const iconSize = FontSize.getSize('main', width);

    return (
        <View style={styles.mainView}>
             <View style={styles.middleContainer}>
                <View style={styles.firstRow}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} src={`https://${day.condition.icon}`} />
                    </View>
                    <CustomText style={[styles.text, styles.firstRowText]} bold>{day.condition.text}</CustomText>
                </View>
                <View style={styles.rightView}>
                    <View style={styles.buttonsContainer}>
                        <CustomButton style={styles.selectDayButton} onPress={onShowDays}>
                            <CustomText style={[styles.text, styles.selectText]}>Dias</CustomText>
                            <FontAwesome5 name="calendar" size={iconSize} color={Colors.accent500} />
                        </CustomButton>
                        <CustomButton style={styles.selectDayButton} onPress={onShowHour}>
                            <CustomText style={[styles.text, styles.selectText]}>Hora a Hora</CustomText>
                            <FontAwesome5 name="clock" size={iconSize} color={Colors.accent500} />
                        </CustomButton>
                    </View>
                    <View style={styles.infoContainer}>
                        <CustomText style={[ styles.text, styles.date ]}>{date}</CustomText>
                        <CustomText style={[styles.text, styles.maxTemp]}>{Util.formatNumber(day.maxtemp_c)} °C</CustomText>
                        <CustomText style={[styles.text]}>{Util.formatNumber(day.mintemp_c)} °C</CustomText>
                        {day.daily_chance_of_rain > 0 && (
                            <View style={styles.rowView}>
                                <FontAwesome5 name="cloud-rain" size={iconSize} color={Colors.accent500} />
                                <CustomText style={[styles.text]}>
                                    {day.daily_chance_of_rain}%
                                </CustomText>
                            </View>
                        )}
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SelectedDayItem;

const width = Dimensions.get('window').width;

const breakpoint = ScreenSize.getScreenSize(width);

const mainIconSize = {
    xl: 250,
    lg: 150,
    md: 100,
    sm: 100,
    xs: 80
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: Colors.toRgba(Colors.darkMain, 0.7),
        borderRadius: 10
    },
    middleContainer: {
        flexDirection: 'row'
    },
    firstRow: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        width: mainIconSize[breakpoint],
        height: mainIconSize[breakpoint]
    },
    firstRowText: {
        textAlign: 'center',
        fontSize: FontSize.getSize('main', width)
    },
    image: {
        width: '100%',
        height: '100%',
    },
    text: {
        color: Colors.accent500,
        fontSize: FontSize.getSize('main', width)
    },
    selectText: {
        fontSize: FontSize.getSize('secondary', width)
    },
    maxTemp: {
        fontSize: FontSize.getSize('large', width),
        fontWeight: "700"
    },
    rowView: {
        flexDirection: 'row',
        columnGap: 3,
        alignItems: 'center'
    },
    rightView: {
        flex: 1
    },
    buttonsContainer: {
        margin: 5,
        rowGap: 5,
        alignItems: 'flex-end'
    },
    selectDayButton: {
        width: breakpoint in ['xl', 'lg'] ? '60%' : '80%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingTop: 5,
        columnGap: 5,
        borderColor: Colors.accent500,
    }, 
    date: {
        // marginTop: 25
    },
    infoContainer: {
        margin: 5
    }
})