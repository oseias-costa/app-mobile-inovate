import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { TableTaks } from '../global/components/TableTasks';
import { Header } from '../global/header/Header';
import { useGetData } from '../utils/firebaseService';

export const Tasks = () => {
  const [ list ] = useGetData('atividades')
  const [ filtered, setFiltered ] = useState({
    status: '', companie: '', responsible: '',
    month: '', year: 2023 })

  const filtro = (arr) =>
    arr?.filter(
      (item) =>
        { return item.realizado?.includes(filtered.status) &&
        item.empresa?.includes(filtered.companie) &&
        item.responsavel?.includes(filtered.responsible) &&
        item.mes?.includes(filtered.month) &&
        item.ano?.toString().includes(filtered.year) }
    );

  return (
    <>
        <Header title='Atividades' setFiltered={setFiltered} filtered={filtered} />
        <TableTaks data={filtro(list)}/>
    </>
  );
}




