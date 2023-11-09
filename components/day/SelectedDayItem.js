import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";
import Util from "../../util/Util";
import dayjs from "dayjs";
import { FontAwesome5 } from '@expo/vector-icons';
import CustomButton from "../element/CustomButton";
import CustomText from "../element/CustomText";

const iconSize = 18;

const SelectedDayItem = ({ selected, onShowDays, onShowHour }) => {
    const { day } = selected;
    const date = dayjs(selected.date).format('DD/MM/YYYY');

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
                    <CustomButton style={styles.selectDayButton} onPress={onShowDays}>
                        <CustomText style={[styles.text, styles.selectText]}>Dias</CustomText>
                        <FontAwesome5 name="calendar" size={iconSize} color={Colors.accent500} />
                    </CustomButton>
                    <CustomButton style={styles.selectDayButton} onPress={onShowHour}>
                        <CustomText style={[styles.text, styles.selectText]}>Hora a Hora</CustomText>
                        <FontAwesome5 name="clock" size={iconSize} color={Colors.accent500} />
                    </CustomButton>
                    
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
    )
}

export default SelectedDayItem;

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
        flex: 1
    },
    imageContainer: {
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 20
    },
    firstRowText: {
        textAlign: 'center',
        fontSize: 18
    },
    image: {
        width: '100%',
        height: '100%',
    },
    text: {
        color: Colors.accent500,
        fontSize: 18
    },
    selectText: {
        fontSize: 15
    },
    maxTemp: {
        fontSize: 35,
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
    selectDayButton: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center', 
        marginTop: 10, 
        marginRight: 15,
        columnGap: 5,
        borderColor: Colors.accent500,
    }, 
    date: {
        marginTop: 25
    }
})