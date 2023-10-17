import dayjs from "dayjs";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HourItem = ({ item, onSelectHour, selected }) => {

    const hour = dayjs(item.time).format('HH');

    const isSelected = item.time === selected?.time;

    const borderStyle = {
        borderWidth: isSelected ? 1 : 0.5
    }

    return (
        <TouchableOpacity style={[borderStyle, styles.item]} onPress={onSelectHour.bind(this, item)}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} src={`https://${item.condition.icon}`} />
            </View>
            <Text style={styles.itemText}>{hour}h</Text>
            <Text style={styles.rainText}>{item.chance_of_rain}%</Text>
        </TouchableOpacity>
    )

}

export default HourItem;

const styles = StyleSheet.create({
    item: {
        borderRadius: 2,
        borderColor: 'black',
        alignItems: 'center',
        marginRight: 2
    },
    imageContainer: {
        overflow: 'hidden',
        width: 27.5,
        height: 27.5
    },
    image: {
        width: '100%',
        height: '100%'
    },
    itemText: {
        fontSize: 11
    },
    rainText: {
        fontSize: 10,
        color: 'blue'
    }
})