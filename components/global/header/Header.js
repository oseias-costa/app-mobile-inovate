import React, { useRef } from "react";
import { View, Text, Dimensions, TouchableOpacity, Button, StyleSheet} from "react-native";
import { Modalize } from 'react-native-modalize';
import { Plus } from "../icons/Plus";

const { width, height } = Dimensions.get('screen')

export const Header = ({title, setFiltered, filtered}) => {
    const modalizeRef = useRef(null)

    return (
       <View style={styles.container}>
            <Plus style={styles.plus} />
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 24}}>{title}</Text>
            <TouchableOpacity style={styles.filterButton} onPress={() => modalizeRef.current?.open()}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>Filtro</Text>
            </TouchableOpacity>
            <Modalize
                ref={modalizeRef}
                HeaderComponent={<Text>Filtro</Text>}
                modalHeight={height / 1.1}
                snapPoint={height / 1.5}
            >
                <View>
                    <Text>Este é o conteúdo</Text>
                    <Button title='2022' onPress={() => setFiltered({...filtered, year: 2022})}></Button>
                </View>
            </Modalize>       
        </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: 60,
        width: '100%', 
        backgroundColor: '#00264B', 
        alignItems: 'center', 
        justifyContent: 'center',
        zIndex: 2,
        flexDirection: 'row'
    },
    filterButton: {
        position: 'absolute',
        alignSelf: 'flex-end',
        right: 0,
        bottom: 20,
        marginRight: 20
        },
    plus: {
        position: 'absolute',
        alignSelf: 'flex-start',
        left: 0,
        marginLeft: 20,
        top: 15
    }
    })
