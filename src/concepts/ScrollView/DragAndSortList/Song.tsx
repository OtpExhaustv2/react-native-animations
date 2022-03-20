import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {SongType, SONG_HEIGHT} from "./Constants";

interface SongProps {
    song: SongType;
}

const Song: React.FC<SongProps> = ({song: {artist, title, cover}}) => {
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: cover
                }}
                style={styles.image}
            />
            <View
                style={{
                    marginLeft: 10,
                }}
            >
                <Text
                    style={styles.title}
                >
                    {title}
                </Text>
                <Text
                    style={styles.artist}
                >
                    {artist}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: SONG_HEIGHT,
        padding: 10
    },
    image: {
        height: 50,
        aspectRatio: 1,
        borderRadius: 4
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4
    },
    artist: {
        fontSize: 12,
        color: 'gray'
    }
});

export default Song;
