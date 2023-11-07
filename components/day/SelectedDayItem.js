import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";
import Util from "../../util/Util";
import dayjs from "dayjs";
import { FontAwesome5 } from '@expo/vector-icons';

const iconSize = 18;

const SelectedDayItem = ({ selected, onSelectPrevisao, onSelectHoras }) => {
    const { day } = selected;
    const date = dayjs(selected.date).format('DD/MM/YYYY');

    return (
        <View style={styles.mainView}>
             <View style={styles.middleContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} src={`https://${day.condition.icon}`} />
                    <Text style={[styles.text]}>{day.condition.text}</Text>
                </View>
                <View style={styles.rightView}>
                    <TouchableOpacity style={[styles.selectDayButton]} >
                        <Text style={[styles.text, styles.selectText]}>Previsão</Text>
                        <FontAwesome5 name="calendar" size={iconSize} color={Colors.accent500} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.selectDayButton]} >
                        <Text style={[styles.text, styles.selectText]}>Hora a Hora</Text>
                        <FontAwesome5 name="clock" size={iconSize} color={Colors.accent500} />
                    </TouchableOpacity>
                    
                    <Text style={[ styles.text, styles.date ]}>{date}</Text>
                    <Text style={[styles.text, styles.maxTemp]}>{Util.formatNumber(day.maxtemp_c)} °C</Text>
                    <Text style={[styles.text]}>{Util.formatNumber(day.mintemp_c)} °C</Text>
                    <View style={styles.rowView}>
                        <FontAwesome5 name="cloud-rain" size={iconSize} color={Colors.accent500} />
                        <Text style={[styles.text]}>
                            {day.daily_chance_of_rain}%
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SelectedDayItem;

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: Colors.darkMain,
        margin: 3,
        borderRadius: 10
    },
    middleContainer: {
        flexDirection: 'row'
    },
    imageContainer: {
        flex: 1,
        height: '100%',
        overflow: 'hidden',
        padding: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '75%',
        height: '75%',
    },
    text: {
        color: Colors.accent500,
        fontSize: 22
    },
    selectText: {
        fontSize: 15
    },
    maxTemp: {
        fontSize: 45,
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
        columnGap: 5
    }, 
    date: {
        marginTop: 25
    }
})