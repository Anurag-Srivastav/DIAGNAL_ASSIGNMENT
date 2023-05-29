import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

/**
 * 
 * @param {*} param0 
 * @returns JSX for the movie Card corresponding to flatlist
 */

const MovieCard = ({
    name = '',
    poster = ''
}) => {
  return (
    <View style={styles.card}>
        <Image
            source={poster}
            style={styles.poster}
        />
        <Text numberOfLines={1} style={styles.title}>{name}</Text>
    </View>
  )
}

export default React.memo(MovieCard);