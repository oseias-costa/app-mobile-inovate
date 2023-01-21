import { StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import { TableCompanies } from './TableCompanies';
import { useGetData } from '../utils/firebaseService';

export const Companies = () => {
  const [ list ] = useGetData('empresas')
  const rows = ['Empresa', 'CNPJ', 'Cidade']
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <Text>Empresas</Text>
        <TableCompanies rows={rows} data={list} />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 120
  },
});