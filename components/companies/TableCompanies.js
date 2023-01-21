import { StyleSheet, Text, View } from "react-native"

export const TableCompanies = ({ data, rows }) => {
    const sortData = data.sort((a, b) => a.nome < b.nome ? -1 : true)
    return(
        <View>
            { sortData?.map(item =>   (
                <View style={styles.containerItem} key={item.cnpj}>
                    <View style={styles.rowTable}>
                        <Text style={styles.propetyRow}>{rows[0]}</Text>
                        <Text>{item.nome}</Text>
                    </View>
                    <View style={styles.rowTable}> 
                        <Text style={styles.propetyRow}>{rows[1]}</Text>
                        <Text>{item.cnpj}</Text>
                    </View>
                    <View style={styles.rowTable}>
                        <Text style={styles.propetyRow}>{rows[2]}</Text>
                        <Text>{item.cidade}</Text>
                    </View>
                </View>
                 )
            )}
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