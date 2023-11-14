import { Dimensions, StyleSheet, View } from "react-native"
import ReturnButton from "./ReturnButton"
import Colors from "../../constants/Colors";
import CustomText from "./CustomText";
import FontSize from "../../constants/FontSize";

const SelectScreenHeader = ({ location, onReturn, date }) => 
    <View style={styles.header}>
        <View style={styles.locationSection}>
            <CustomText style={[ styles.locationText ]} bold>{location.name}</CustomText>
            <CustomText style={styles.text}>{location.region}</CustomText>
            <CustomText style={styles.text}>{location.country}</CustomText>
        </View>
        {date && <CustomText style={[ styles.locationText ]} bold>{ date }</CustomText> }
        <ReturnButton onReturn={onReturn} style={styles.returnButton}/>
    </View>

export default SelectScreenHeader;

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.toRgba(Colors.darkMain, 0.7),
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    locationSection: {
        maxWidth: '50%'
    },
    text: {
        color: Colors.accent500,
        fontSize: FontSize.getSize('small', width),
    },
    locationText: {
        fontSize: FontSize.getSize('secondary', width),
        fontWeight: '700',
        color: Colors.accent500
    },
    returnButton: {
        alignSelf: 'flex-start'
    }
})