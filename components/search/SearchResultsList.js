import { FlatList, StyleSheet } from "react-native"
import SearchResultItem from "./SearchResultItem";

const SearchResultsList = ({ resultList, onSelect }) => (
    <FlatList style={styles.mainContainer} contentContainerStyle={styles.contentContainer}
        data={resultList} renderItem={({item, idx}) => <SearchResultItem key={idx} item={item} onSelect={onSelect} />}
        />
)
export default SearchResultsList;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%'
    },
    contentContainer: {
        alignItems: 'stretch',
        flex: 1
    }
})