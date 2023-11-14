import dayjs from "dayjs";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";
import { FontAwesome5 } from '@expo/vector-icons'; 

import Util from '../../util/Util';
import CustomButton from "../element/CustomButton";
import CustomText from "../element/CustomText";
import FontSize from "../../constants/FontSize";
import ScreenSize from "../../constants/ScreenSize";

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

    const selectButtonBorder = {
        borderColor: isSelected ? Colors.accent500 : Colors.secondary600
    }

    const iconSize = FontSize.getSize('main', width);
    const smallIconSize = FontSize.getSize('secondary', width);



    return (
        <View style={[borderStyle, styles.item]}>
            <View style={styles.rowView}>
                <View style={[styles.textContainer, styles.firstRow]}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} src={`https://${day.condition.icon}`} />
                    </View>
                    <CustomText style={[itemTextColor, styles.itemText]} bold>{day.condition.text}</CustomText>
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.buttonView}>
                        <CustomButton style={{...selectButtonBorder, ...styles.selectButton}} onPress={onSelectDay.bind(this, item)}>
                            <CustomText style={{...itemTextColor, ...styles.selectButtonText}} bold>Visualizar</CustomText>
                            <FontAwesome5 name="eye" size={iconSize} color={itemTextColor.color} />
                        </CustomButton>
                    </View>
                    <View style={styles.textInfoContainer}>
                        <CustomText style={[itemTextColor, styles.dateText]} bold>{date}</CustomText>
                        <View style={styles.rowView}>
                            <FontAwesome5 name="temperature-high" size={iconSize} color={itemTextColor.color} />
                            <CustomText style={[itemTextColor, styles.itemText]} bold>{Util.formatNumber(day.maxtemp_c)} °C</CustomText>
                        </View>
                        <View style={styles.rowView}>
                            <FontAwesome5 name="temperature-low" size={iconSize} color={itemTextColor.color} />
                            <CustomText style={[itemTextColor, styles.itemText]} bold>{Util.formatNumber(day.mintemp_c)} °C</CustomText>
                        </View>
                        <View style={styles.rowView}>
                            <FontAwesome5 name="cloud-rain" size={smallIconSize} color={rainTextColor.color} />
                            <CustomText style={[rainTextColor, styles.rainText]}>
                                {day.daily_chance_of_rain}%
                            </CustomText>
                        </View>
                    </View>
                </View>
                
            </View>
        </View>
    );

}

export default DayItem;

const width = Dimensions.get('window').width;

const iconSize = {
    xl: 175,
    lg: 135,
    md: 80,
    sm: 60,
    xs: 40
}

const breakpoint = ScreenSize.getScreenSize(width);

const styles = StyleSheet.create({
    item: {
        borderRadius: 4,
        borderColor: 'black',
        flex: 1,
        alignItems: 'center',
        height: '100%',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%'
    },
    rowView: {
        flexDirection: 'row',
        flex: 1,
        columnGap: 5
    },
    firstRow: {
        alignItems: 'center',
        marginRight: 20,
        justifyContent: 'center',
        flex: 1
    },
    selectButton: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        columnGap: 5,
        alignItems: 'center'
    },
    selectButtonText: {
        fontWeight: '700',
        fontSize: FontSize.getSize('secondary', width)
    },
    textInfoContainer: {
        flex: 1,
        rowGap: 5,
        marginTop: 10
    },
    dateText: {
        fontWeight: 'bold',
        fontSize: FontSize.getSize('main', width)
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
        overflow: 'hidden',
        height: iconSize[breakpoint],
        width: iconSize[breakpoint],
        alignSelf: 'center'
    },
    textContainer: {
        flex: 1,
        textAlign: 'center',
        rowGap: 5
    },
    itemText: {
        fontWeight: '700',
        fontSize: FontSize.getSize('main', width),
        textAlign: 'center'
    },
    rainText: {
        fontSize: FontSize.getSize('secondary', width),
    },
    rowView: {
        flexDirection: 'row',
        columnGap: 3,
        alignItems: 'center'
    }
})