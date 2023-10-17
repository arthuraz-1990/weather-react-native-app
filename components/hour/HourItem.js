import dayjs from "dayjs";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

const HourItem = ({ item, onSelectHour }) => {

    const hour = dayjs(item.time).format('HH');

    return (
        <TouchableOpacity styles={styles.item} onPress={onSelectHour.bind(this, item)}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={item.condition.icon} />
            </View>
            <Text style={styles.itemText}>{hour}h</Text>
            <Text style={styles.itemText}>{item.chance_of_rain}%</Text>
        </TouchableOpacity>
    )

}

export default HourItem;

const styles = StyleSheet.create({
    item: {
        flex: 1,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: 'black'
    },
    imageContainer: {
        overflow: 'hidden',
        width: 20,
        height: 20
    },
    image: {
        width: '100%',
        height: '100%'
    },
    itemText: {
        fontSize: 8
    }
})