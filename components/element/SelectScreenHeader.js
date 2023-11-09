import { StyleSheet, Text, View } from "react-native"
import ReturnButton from "./ReturnButton"
import Colors from "../../constants/Colors";
import CustomText from "./CustomText";

const SelectScreenHeader = ({ location, onReturn, date }) => 
    <View style={styles.header}>
        <View style={styles.locationSection}>
            <CustomText style={[ styles.text, styles.locationText ]} bold>{location.name}</CustomText>
            <CustomText style={styles.text}>{location.region}</CustomText>
            <CustomText style={styles.text}>{location.country}</CustomText>
        </View>
        {date && <CustomText style={[styles.text, styles.locationText]} bold>{ date }</CustomText> }
        <ReturnButton onReturn={onReturn} style={styles.returnButton}/>
    </View>

export default SelectScreenHeader;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.toRgba(Colors.darkMain, 0.7),
        padding: 20,
        borderRadius: 10,
        alignItems: 'center'
    },
    locationSection: {
        maxWidth: '50%'
    },
    text: {
        color: Colors.accent500,
        fontSize: 12
    },
    locationText: {
        fontSize: 14,
        fontWeight: '700'
    },
    returnButton: {
        alignSelf: 'flex-start'
    }
})