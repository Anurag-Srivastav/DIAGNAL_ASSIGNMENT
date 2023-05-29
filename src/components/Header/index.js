import React, { useRef } from 'react';
import { View, Image, TextInput, TouchableOpacity, Keyboard, ImageBackground } from 'react-native';
import { ICON } from '../../assets';
import styles from './styles';
import { STRING } from '../../utils/String';
import { COLORS } from '../../utils/Colors';

/**
 * 
 * @param {*placeholder, search, setSearch} param0 
 * @returns JSX to return the Header containing the Back button , Search box and the Search Icon
 */

const Header = ({
    search = '',
    setSearch = () => { }
}) => {
    const searchRef = useRef();

    /**
     * Function to clear search box
     */
    const emptySearch = () => {
        Keyboard.dismiss();
        setSearch('');
    }

    /**
     * Function to focus text Input on search icon tap
     */
    const focusTextInput = () => {
        searchRef?.current?.focus()
    }

    return (
            <ImageBackground source={ICON.navBar} style={styles.mainContainer}>
                <View style={styles.textInputContainer}>
                    <TouchableOpacity onPress={emptySearch} hitSlop={{right: 10, left: 10, top : 10, bottom : 10}}>
                        <Image
                            source={ICON.back}
                            style={styles.backIcon}
                        />
                    </TouchableOpacity>
                    <TextInput
                        ref={searchRef}
                        selectionColor={COLORS.white}
                        value={search}
                        placeholder={STRING.placeHolder}
                        onChangeText={setSearch}
                        style={styles.textInput}
                        placeholderTextColor={COLORS.white}
                    />
                </View>
                <TouchableOpacity onPress={focusTextInput}> 
                    <Image
                        source={ICON.search}
                        style={styles.searchIcon}
                    />
                </TouchableOpacity>
            </ImageBackground>
    )
}

export default React.memo(Header);