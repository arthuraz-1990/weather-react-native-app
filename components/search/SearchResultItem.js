import { StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import CustomText from "../element/CustomText";
import { Shadow } from 'react-native-shadow-2';

const SearchResultItem = ({ item, onSelect }) => {

    const { properties } = item;

    return (
        <Shadow>
            <TouchableOpacity style={styles.itemContainer} onPress={onSelect.bind(this, item)}>
                <CustomText bold style={[styles.descriptionText, styles.text]}>{properties.formatted}</CustomText>
                {properties.city && <CustomText style={[styles.itemText, styles.text]}>{properties.city}</CustomText>}
                <CustomText style={[styles.itemText, styles.text]}>{properties.state}</CustomText>
                <CustomText style={[styles.itemText, styles.text]}>{properties.country}</CustomText>
            </TouchableOpacity>
        </Shadow>
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
        borderWidth: 1,
        padding: 6,
        marginBottom: 2
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