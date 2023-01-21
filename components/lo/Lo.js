import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TableTaks } from '../global/components/TableTasks';
import { Header } from '../global/styles/GlobalStyles';
import { useGetData } from '../utils/firebaseService';

export const Lo = () => {
  const [ list ] = useGetData('lo')

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <TableTaks data={list} />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});