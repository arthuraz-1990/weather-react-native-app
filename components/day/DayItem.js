import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DayItem = ({ item, onSelectDay }) => {

    return (
        <TouchableOpacity styles={styles.item} onPress={onSelectDay.bind(this, item)}>
            <View>
                <Text >{item.date}</Text>
            </View>
            <View style={[styles.middleContainer, styles.imageContainer]}>
                <Image style={styles.image} source={item.condition.icon} />
            </View>
            <View style={styles.middleContainer}>
                <Text style={styles.itemText}>{item.day.maxtemp_c} C</Text>
                <Text style={styles.itemText}>{item.day.mintemp_c} C</Text>
                <Text style={styles.rainText}>{item.day.daily_chance_of_rain}%</Text>
            </View>
            
        </TouchableOpacity>
    );

}

export default DayItem;

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        borderRadius: 2,
        borderWidth: 1
    },
    middleContainer: {
        width: '50%',
        height: 100
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        overflow: 'hidden',
        alignItems: 'center'
    },
    itemText: {
        fontWeight: '500',
        fontSize: 12
    },
    rainText: {
        fontSize: 10,
        color: 'blue'
    }
})