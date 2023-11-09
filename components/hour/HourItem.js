import dayjs from "dayjs";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";
import { FontAwesome5 } from '@expo/vector-icons'; 
import Util from "../../util/Util";

const HourItem = ({ item, onSelectHour, selected }) => {

    const hour = dayjs(item.time).format('HH');

    const isSelected = item.time === selected?.time;

    const borderStyle = {
        borderWidth: isSelected ? 1 : 0.5,
        backgroundColor: Colors.toRgba(isSelected ? Colors.primary600 : Colors.secondary500, 0.7)
    }

    const itemTextColor = {
        color: isSelected ? Colors.accent500 : Colors.text
    }

    const rainTextColor = {
        color: isSelected ? Colors.accent500 : Colors.text
    }

    return (
        <TouchableOpacity style={[borderStyle, styles.item]} onPress={onSelectHour.bind(this, item)}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} src={`https://${item.condition.icon}`} />
            </View>
            <Text style={[itemTextColor, styles.itemText, styles.text]}>{hour}h</Text>
            <Text style={[rainTextColor, styles.rainText, styles.text]}>{Util.formatNumber(item.temp_c)} °C</Text>
            <View style={styles.rainRow}>
                <FontAwesome5 name="cloud-rain" size={styles.rainText.fontSize} color={rainTextColor.color} />
                <Text style={[rainTextColor, styles.rainText, styles.text]}>{item.chance_of_rain}%</Text>
            </View>
        </TouchableOpacity>
    )

}

export default HourItem;

const styles = StyleSheet.create({
    item: {
        borderRadius: 4,
        alignItems: 'center',
        marginRight: 4,
        width: 70,
        height: 115,
        rowGap: 3
    },
    imageContainer: {
        overflow: 'hidden',
        width: 40,
        height: 40
    },
    image: {
        width: '100%',
        height: '100%'
    },
    itemText: {
        fontSize: 16
    },
    rainText: {
        fontSize: 13
    },
    rainRow: {
        flexDirection: 'row',
        columnGap: 3
    },
    text: {
        fontWeight: '500'
    }
})