import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default function Home({ navigation }) {
    const [origin, setOrigin] = useState(null);
    useEffect(() => {
        (async function () {
            const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
            if (status === 'granted') {
                let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
                setOrigin({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.00922,
                    longitudeDelta: 0.00421,
                })
            } else {
                throw new Error('Location permission not granted');
            }
        })();
    }, []);


    return (
        <View>
            <View style={styles.superior}>
                <View style={styles.iconWrapper1}>
                    <Image source={require('../img/Vector.png')} />
                </View>
                <Text style={styles.title}>
                    Pedalada
                </Text>
                <View style={styles.iconWrapper2}>
                    <Image source={require('../img/config.png')} />
                </View>
            </View>
            <MapView style={{ width: '100%', height: '75%' }}
                initialRegion={origin}
                showsUserLocation={true}>
            </MapView>
            <View style={styles.rodape}>
                <View style={styles.iconrodape}>
                    <Image source={require('../img/Vector-1.png')} />
                    <Image source={require('../img/Vector-2.png')} />
                    <Image source={require('../img/Vector-3.png')} />
                    <Image source={require('../img/Vector-4.png')} />
                </View>
                <TouchableOpacity style={styles.container}>
                    <Text style={styles.titlerodape}
                        title="Monitor de Atividade"
                        onPress={() => navigation.navigate('Gravar atividade')}>Iniciar Atividade</Text>
                    <View style={styles.iconright}>
                        <Image source={require('../img/Vector-5.png')} style={styles.imgrodape} />
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    superior: {
        width: '100%',
        height: 56,
        backgroundColor: '#fff',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        flex: 1,
        fontSize: 20,
        textAlign: 'center',
        justifyContent:'center',
        color: '#000000',
    },
    iconWrapper1: {
        width: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    iconWrapper2: {
        width: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 20
    },
    rodape: {
        width: '100%',
        backgroundColor: '#fff',

    },
    iconrodape: {
        width: '100%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 36,
        paddingHorizontal: 35,
        justifyContent: 'space-between',
        padding: 5,
    },
    ride: {
        width: '50%',
        height: 56,
        backgroundColor: '#fff',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconWrapper3: {
        width: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: 300,
        height: 48,
        left: 30,
        top: 10,
        backgroundColor: '#0564FF',
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        
    },
    titlerodape: {
        flex: 1,
        paddingHorizontal: 2,
        textAlign: 'left',
        fontSize: 16,
        color: '#fff',
    },
    iconright: {
        width: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 16,
    },
    mapa: {
        flex: 1,
    }

});