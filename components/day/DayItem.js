import dayjs from "dayjs";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";
import { FontAwesome5 } from '@expo/vector-icons'; 

import Util from '../../util/Util';

const DayItem = ({ item, onSelectDay, selected }) => {

    const { day } = item;
    const date = dayjs(item.date).format('DD/MM/YYYY');

    const isSelected = item.date === selected?.date;

    const borderStyle = {
        borderWidth: isSelected ? 1 : 0.5,
        backgroundColor: Colors.toRgba(isSelected ? Colors.primary600 : Colors.secondary500, 0.7)
    }

    const itemTextColor = {
        color: isSelected ? Colors.accent500 : Colors.darkMain
    }

    const rainTextColor = {
        color: isSelected ? Colors.accent500 : Colors.secondary600
    }

    return (
        <TouchableOpacity style={[borderStyle, styles.item]} onPress={onSelectDay.bind(this, item)}>
            <View>
                <Text style={[itemTextColor, styles.dateText]}>{date}</Text>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} src={`https://${day.condition.icon}`} />
                    <Text style={[itemTextColor, styles.itemText]}>{day.condition.text}</Text>
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.rowView}>
                        <FontAwesome5 name="temperature-high" size={18} color={itemTextColor.color} />
                        <Text style={[itemTextColor, styles.itemText]}>{Util.formatNumber(day.maxtemp_c)} °C</Text>
                    </View>
                    <View style={styles.rowView}>
                        <FontAwesome5 name="temperature-low" size={18} color={itemTextColor.color} />
                        <Text style={[itemTextColor, styles.itemText]}>{Util.formatNumber(day.mintemp_c)} °C</Text>
                    </View>
                    <View style={styles.rowView}>
                        <FontAwesome5 name="cloud-rain" size={12} color={rainTextColor.color} />
                        <Text style={[rainTextColor, styles.rainText]}>
                            {day.daily_chance_of_rain}%
                        </Text>
                    </View>
                    
                </View>
            </View>
        </TouchableOpacity>
    );

}

export default DayItem;

const styles = StyleSheet.create({
    item: {
        borderRadius: 4,
        borderColor: 'black',
        flex: 1,
        alignItems: 'center',
        height: '100%',
        padding: 20
    },
    dateText: {
        fontWeight: 'bold'
    },
    middleContainer: {
        flexDirection: 'row',
        marginTop: 5
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        flex: 1,
        overflow: 'hidden',
        height: 25,
        width: 50,
        alignSelf: 'center'
    },
    textContainer: {
        flex: 1,
        textAlign: 'center',
        rowGap: 5
    },
    itemText: {
        fontWeight: '700',
        fontSize: 15,
    },
    rainText: {
        fontSize: 12
    },
    rowView: {
        flexDirection: 'row',
        columnGap: 3,
        alignItems: 'center'
    }
})