import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";

const SearchResultItem = ({ item, onSelect }) => {

    const { properties } = item;

    return (
        <TouchableOpacity style={styles.itemContainer} onPress={onSelect.bind(this, item)}>
            <Text style={[styles.descriptionText, styles.text]}>{properties.formatted}</Text>
            {properties.city && <Text style={[styles.itemText, styles.text]}>{properties.city}</Text>}
            <Text style={[styles.itemText, styles.text]}>{properties.state}</Text>
            <Text style={[styles.itemText, styles.text]}>{properties.country}</Text>
        </TouchableOpacity>
    )

}

export default SearchResultItem;

const styles = StyleSheet.create({
    itemContainer: {
        borderRadius: 4,
        width: '100%',
        height: 80,
        borderColor: Colors.accent500,
        marginRight: 4,
        borderColor: 'red',
        borderWidth: 1
    },
   
    descriptionText: {
        fontSize: 13,
        fontWeight: '700'
    },
    itemText: {
        fontSize: 9,
        fontWeight: '500'
    },
    text: {
        color: Colors.accent500
    }
})