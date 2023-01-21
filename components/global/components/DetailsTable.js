import { ScrollView, StyleSheet, Text, View } from "react-native"


export const DetailsTable = ({route}) => {
    const item = route.params.item
    console.log(item)
    return(
        <ScrollView>
            <Text>Detalhes</Text>
                <View style={styles.containerItem} key={item.id}>
                    <RowTable text='Empresa' content={item.empresa} />
                    <RowTable text='Atividade' content={item.atividade} />
                    <RowTable text='Situação' content={item.situacao} />
                    <RowTable text='Resp' content={item.responsavel} />
                    <RowTable text='Prazo' content={item.prazo} />
                    <RowTable text='Status' content={item.realizado} />
                </View>
        </ScrollView>
    )
}

const RowTable = ({ content, text }) => {
    return(
        <View style={styles.rowTable}> 
            <Text style={styles.propetyRow}>{text}</Text>
            <Text>{content?.length <= 35 ? content : `${content?.slice(0, 25)}...`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerItem: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        paddingLeft: 20,
        paddingBottom: 10,
        paddingTop: 10
    },
    rowTable: {
        flex: 1,
        flexDirection: 'row'
    },
    propetyRow: {
        width: 80,
        fontWeight: 'bold'
    }
})