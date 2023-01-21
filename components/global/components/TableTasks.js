import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { CircleStatus } from "../icons/CircleStatus";
import { Time } from "../icons/Time";

export const TableTaks = ({ data }) => {

    const navigation = useNavigation()
    const sortData = data.sort((a, b) => a.empresa < b.empresa ? -1 : true)
    return(
        <ScrollView style={{paddingTop: 60}}>
            { sortData?.map(item =>   (
                <TouchableOpacity onPress={() => navigation.push('Details', { item })} key={item.id}>
                <View style={styles.containerItem}>
                    <Status content={item.realizado} />
                    <CompanieRow company={item.empresa} responsible={item.responsavel} />
                    <Description text='Atividade' content={item.atividade} />
                    <Description text='Situação' content={item.situacao} />
                    <Term term={item.prazo} status={item.realizado}/>
                </View>
                </TouchableOpacity>
                 )
            )}
        </ScrollView>
    )
}

const Status = ({ content }) => {
    const status = {
        Realizado: { fill: '#78A55A' },
        Parcial: { fill: '#F8BB00' },
        Pendente: { fill: '#FF4C4C' }
    }
        const color = status[content]?.fill
    return(
        <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 5}}>
            <CircleStatus fill={color} />
            <Text style={{color: color, marginLeft: 5}}>{content}</Text>    
        </View>
    )
}

const CompanieRow = ({company, responsible}) => {
    return(
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 10}}>
            <Text style={{
                fontSize: 20, fontWeight: 'bold', color: '#414141'
                }}>{company}</Text>
            <Text style={{color: '#B9B7B7'}}>{responsible?.split(' ')[0]}</Text>
        </View>
    )
}

const Description = ({content, text}) => {
    return(
        <View style={{flexDirection: 'row'}}>
            <Text style={{paddingRight: 5, color: '#626060', fontWeight: '700'}}>{text}:</Text>
            <Text numberOfLines={1} style={{color: '#626060'}}>{content}</Text>
        </View>
    )
}

const Term = ({term, status}) => {
    const date = term?.split('-')
    const dateBR = date !== undefined && `${date[2]}/${date[1]}/${date[0]}`

    const calculate = Math.ceil(
        (new Date(term).getTime() - new Date) / 1000 / 60 / 60 / 24)
    const statusText = (item) => {
        if(item > 0){
            return 'Faltam '
        } else if (item < 0){
            return 'Vencida há '
        } else if (item === 0){
            return 'Vence hoje'
        }
    }
    const statusFalse = status !== 'Realizado' 
    return(
        <View style={{
            flexDirection: 'row', 
            justifyContent: statusFalse ? 'space-between' : 'flex-end',
            marginTop: 7, paddingTop: 7, 
            borderTopWidth: 1, 
            borderTopColor: '#E9E9E9'
            }}
        >
            {statusFalse && <View style={{flexDirection: 'row'}}>
                <Time /><Text  style={{color: '#626060', marginLeft: 5, fontSize: 13}}>Prazo {dateBR}</Text>
            </View>}
            {statusFalse
            ? <Text style={{color: '#626060', fontSize: 13}}>
                {statusText(calculate)}
                {calculate !== 0 && Math.abs(calculate)}
                {calculate !== 0 && ' dias'}
              </Text> 
            : <Text style={{color: '#626060', fontSize: 13, alignSelf: 'flex-end'}}>Concluída</Text> }
        </View> 
    )
}

const styles = StyleSheet.create({
    containerItem: {
        borderColor: '#D4D4D4',
        borderWidth: 1,
        paddingLeft: 20,
        paddingRight:20,
        paddingBottom: 10,
        paddingTop: 10,
        backgroundColor: '#FFF',
        borderRadius: 20,
        marginTop: 20,
        marginHorizontal: 20
    },
    rowTable: {
        flex: 1,
        flexDirection: 'row'
    },
    propetyRow: {
        width: 80,
        marginRight: 20,
        fontWeight: 'bold'
    }
})