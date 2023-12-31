import { Dimensions, Keyboard, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Colors from "../constants/Colors";

import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from "react";
import AddressService from "../services/Address.service";
import LoadingScreen from "./LoadingScreen";
import SearchResultsList from "../components/search/SearchResultsList";
import CustomText from "../components/element/CustomText";
import FontSize from "../constants/FontSize";

const SearchScreen = ({ onSelect, onHide }) => {

    const [ value, setValue ] = useState('');
    const [ results, setResults ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const onChangeInput = (inputValue) => {
        setValue(inputValue);
    }

    const onCleanInput = () => {
        setValue('');
        setResults([]);
    }

    const onSearch = () => {
        Keyboard.dismiss();
        setLoading(true);
        AddressService.find(value).then(
            resp => {
                const { data } = resp;
                setResults(data.features);
            }
        ).catch(err => {
            setResults([]);
        }).
        finally(() => {
            setLoading(false);
        });
    }

    let content = <SearchResultsList resultList={results} onSelect={onSelect}/>
    if (loading)
        content = <LoadingScreen textStyle={styles.loadingText}/>
    else if (results.length === 0)
        content = emptyResults;

    const fontSize = FontSize.getSize('main', width);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.searchContainer}>
                <TextInput value={value} onChangeText={onChangeInput} placeholder="Nome do Local"
                            onEndEditing={onSearch.bind(this)}
                            style={styles.textInput} autoCorrect={false}  />

                <TouchableOpacity onPress={onSearch.bind(this)}>
                    <FontAwesome5 name="search" size={fontSize} color={Colors.accent500} />
                </TouchableOpacity>

                <TouchableOpacity onPress={onCleanInput.bind(this)}>
                    <FontAwesome5 name="broom" size={fontSize} color={Colors.accent500} />
                </TouchableOpacity>

                <TouchableOpacity onPress={onHide.bind(this)}>
                    <FontAwesome5 name="window-close" size={fontSize} color={Colors.accent500} />
                </TouchableOpacity>
            </View>
            <View style={styles.resultContainer}>
                { content }
            </View>
        </View>
    )

}

export default SearchScreen;

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: Colors.darkMain,
        padding: 16
    },
    textInput: {
        flex: 1,
        backgroundColor: Colors.accent500,
        padding: 8,
        fontFamily: 'Inter_400Regular',
        fontSize: FontSize.getSize('main', width)
    },
    loadingText: {
        color: Colors.accent500
    },  
    searchContainer: {
        flexDirection: 'row',
        height: 100,
        width: '100%',
        alignItems: 'center',
        columnGap: 4,
        paddingHorizontal: 12
    },
    resultContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 12
    },
    emptyResults: {
        color: Colors.accent500,
        fontSize: FontSize.getSize('main', width),
        fontWeight: '600',
        textAlign: 'center'
    }
});

const emptyResults = (
    <CustomText bold style={styles.emptyResults}>Não foram encontrados resultados.</CustomText>
)