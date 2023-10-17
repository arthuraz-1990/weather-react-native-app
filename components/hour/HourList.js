import { FlatList } from "react-native"
import HourItem from "./HourItem";

const HourList = ({ list: [] }) => {

    return (
        <FlatList 
            horizontal
            data={list}
            renderItem={({item}) => <HourItem item={item} />}
         /> 
    )
}

export default HourList;