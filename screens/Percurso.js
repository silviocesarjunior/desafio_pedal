import React, { useState, useEffect, useRef, Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class Percurso extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            timer: null,
            number: 0,
            startStopText: 'Stop',
        }
        this.startStopButton = this.startStopButton.bind(this);
    }
    startStopButton() {
        if (this.state.timer == null) {
            let newS = this.state;
            newS.startStopText = 'Stop';
            this.setState(newS);

            this.state.timer = setInterval(() => {
                let newState = this.state;
                newState.number += 0.1;
                this.setState(newState);
            }, 100);
        } else {
            clearInterval(this.state.timer);
            this.state.timer = null;
        };
    
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
        // render() {

            return (
                <View>
                    <View style={styles.superior}>
                        <View style={styles.iconWrapper1}>
                            <Image source={require('../img/Vector.png')}></Image>
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
                    <View style={styles.tempo}>
                        <Text style={styles.temp}>
                            tempo
                        </Text>
                        <View style={styles.body}>
                            <View sstyle={styles.tcontainer}>
                                <Text style={styles.counterText}>{this.state.number.toFixed(1)}</Text>
                            </View>
                        </View>
                        <View style={styles.wrapper}>
                            <Text style={styles.titlerodape}>Distância</Text>
                            <Text style={styles.titlerodape}>Velocidade Km/h</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={this.startStopButton}>
                                <Text>{this.state.startStopText}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        }
    }
// }
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 100,
        width: 344,
        height: 30,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ff0000',
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    tcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterText: {
        flex: 1,
        color: '#000',
        fontSize: 25,
        fontWeight: "bold",
        padding: 2,
    },
    temp: {
        fontSize: 24,
        padding: 2,
    },
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
        justifyContent: 'center',
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
        left: 16,
        top: 10,
        backgroundColor: '#0564FF',
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        flexDirection: 'row',
    },
    titlerodape: {
        width: '100%',
        flex: 1,
        paddingHorizontal: 2,
        textAlign: 'center',
        fontSize: 16,
        color: '#000',
    },
    iconright: {
        width: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 16,
    },
    mapa: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        height: '40%',
    },
    tempDist: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    tempo: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#fff',
        padding: 25,
    },
    distancia: {
        flex: 1,
        flexDirection: 'row',
    },
    wrapper: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        flexDirection: 'row',
    },

});