import dayjs from "dayjs";
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";
import { FontAwesome5 } from '@expo/vector-icons'; 
import Util from "../../util/Util";
import CustomText from "../element/CustomText";
import { Shadow } from 'react-native-shadow-2';
import FontSize from "../../constants/FontSize";
import ScreenSize from "../../constants/ScreenSize";

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
        <Shadow>
            <TouchableOpacity style={[borderStyle, styles.item]} onPress={onSelectHour.bind(this, item)}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} src={`https://${item.condition.icon}`} />
                </View>
                <CustomText style={[itemTextColor, styles.itemText, styles.text]} bold>{hour}h</CustomText>
                <CustomText style={[rainTextColor, styles.rainText, styles.text]}>{Util.formatNumber(item.temp_c)} °C</CustomText>
                <View style={styles.rainRow}>
                    <FontAwesome5 name="cloud-rain" size={styles.rainText.fontSize} color={rainTextColor.color} />
                    <CustomText style={[rainTextColor, styles.rainText, styles.text]}>{item.chance_of_rain}%</CustomText>
                </View>
            </TouchableOpacity>
        </Shadow>
    )

}

export default HourItem;

const width = Dimensions.get('window').width;

const breakpoint = ScreenSize.getScreenSize(width);

const imageSize = {
    xl: 60,
    lg: 50,
    md: 45,
    sm: 30,
    xs: 25
}

const itemWidth = {
    xl: 90,
    lg: 80,
    md: 70,
    sm: 60,
    xs: 50
}

const itemHeight = {
    xl: 175,
    lg: 150,
    md: 115,
    sm: 100,
    xs: 90
}

const styles = StyleSheet.create({
    item: {
        borderRadius: 4,
        alignItems: 'center',
        marginRight: 4,
        width: itemWidth[breakpoint],
        height: itemHeight[breakpoint],
        rowGap: 3
    },
    imageContainer: {
        overflow: 'hidden',
        width: imageSize[breakpoint],
        height: imageSize[breakpoint]
    },
    image: {
        width: '100%',
        height: '100%'
    },
    itemText: {
        fontSize: FontSize.getSize('secondary', width)
    },
    rainText: {
        fontSize: FontSize.getSize('secondary', width)
    },
    rainRow: {
        flexDirection: 'row',
        columnGap: 3
    },
    text: {
        fontWeight: '500'
    }
})