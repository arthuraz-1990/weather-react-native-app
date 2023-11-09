import dayjs from "dayjs";
import { Image, StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";
import { FontAwesome5 } from '@expo/vector-icons'; 

import Util from '../../util/Util';
import CustomButton from "../element/CustomButton";
import CustomText from "../element/CustomText";

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
                            <FontAwesome5 name="eye" size={18} color={itemTextColor.color} />
                        </CustomButton>
                    </View>
                    <View style={styles.textInfoContainer}>
                        <CustomText style={[itemTextColor, styles.dateText]} bold>{date}</CustomText>
                        <View style={styles.rowView}>
                            <FontAwesome5 name="temperature-high" size={18} color={itemTextColor.color} />
                            <CustomText style={[itemTextColor, styles.itemText]} bold>{Util.formatNumber(day.maxtemp_c)} °C</CustomText>
                        </View>
                        <View style={styles.rowView}>
                            <FontAwesome5 name="temperature-low" size={18} color={itemTextColor.color} />
                            <CustomText style={[itemTextColor, styles.itemText]} bold>{Util.formatNumber(day.mintemp_c)} °C</CustomText>
                        </View>
                        <View style={styles.rowView}>
                            <FontAwesome5 name="cloud-rain" size={12} color={rainTextColor.color} />
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
        marginTop: 5,
        flexDirection: 'row',
        columnGap: 5
    },
    selectButtonText: {
        fontWeight: '700'
    },
    textInfoContainer: {
        flex: 1,
        rowGap: 5,
        marginTop: 10
    },
    dateText: {
        fontWeight: 'bold'
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
        height: 80,
        width: 80,
        alignSelf: 'center'
    },
    textContainer: {
        flex: 1,
        textAlign: 'center',
        rowGap: 5
    },
    itemText: {
        fontWeight: '700',
        fontSize: 20,
        textAlign: 'center'
    },
    rainText: {
        fontSize: 18
    },
    rowView: {
        flexDirection: 'row',
        columnGap: 3,
        alignItems: 'center'
    }
})