import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import CustomText from "../element/CustomText";
import FontSize from "../../constants/FontSize";
import ScreenSize from "../../constants/ScreenSize";

const SearchResultItem = ({ item, onSelect }) => {

    const { properties } = item;

    return (
        <TouchableOpacity style={styles.itemContainer} onPress={onSelect.bind(this, item)}>
            <CustomText bold style={[styles.descriptionText, styles.text]}>{properties.formatted}</CustomText>
            {properties.city && <CustomText style={[styles.itemText, styles.text]}>{properties.city}</CustomText>}
            <CustomText style={[styles.itemText, styles.text]}>{properties.state}</CustomText>
            <CustomText style={[styles.itemText, styles.text]}>{properties.country}</CustomText>
        </TouchableOpacity>
    )

}

export default SearchResultItem;

const width = Dimensions.get('window').width;

const breakpoint = ScreenSize.getScreenSize(width);

const itemHeight = {
    xl: 180,
    lg: 140,
    md: 80,
    sm: 60,
    xs: 50
}

const styles = StyleSheet.create({
    itemContainer: {
        borderRadius: 4,
        width: '100%',
        height: itemHeight[breakpoint],
        borderColor: Colors.accent500,
        marginRight: 4,
        borderWidth: 1,
        padding: 6,
        marginBottom: 2
    },
   
    descriptionText: {
        fontSize: FontSize.getSize('secondary', width) - 2,
        fontWeight: '700'
    },
    itemText: {
        fontSize: FontSize.getSize('small', width) - 2,
        fontWeight: '500'
    },
    text: {
        color: Colors.accent500
    }
})