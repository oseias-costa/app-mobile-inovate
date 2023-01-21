import { TouchableOpacity, Text, StyleSheet, View } from "react-native"
import { moderateScale } from "../../utils/metricks"


export const CustomButtom = ({title, onPress, status, id}) => {
    return (
    <TouchableOpacity onPress={onPress}>
        <View style={status !== id ? styles.constainer : styles.active}>
            <Text style={status !== id ? styles.txt : styles.txtActive}>{title}</Text>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 8,
        paddingTop: 7,
        paddingHorizontal: 17,
        borderRadius: 22,
        backgroundColor: '#00264B',
        margin: 2,
        borderColor: '#AFACAC',
        borderWidth: 1,
    },
    active: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 8,
        paddingTop: 7,
        paddingHorizontal: 17,
        borderRadius: 22,
        backgroundColor: '#00264B',
        color: '#fff',
        margin: 2,
        borderColor: '#fff',
        borderWidth: 1,
    },
    txt: {
        fontSize: moderateScale(16),
        color: '#AFACAC'
    },
    txtActive: {
        fontSize: moderateScale(16),
        color: '#fff',
        fontWeight: 'bold'
    }
})