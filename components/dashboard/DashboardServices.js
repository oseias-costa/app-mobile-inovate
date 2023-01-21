import { onValue, ref } from "firebase/database";
import { useState, useEffect } from "react";
import { db } from '../context/firebase'

export const useGetItensByYearAndType = () => {
    const [ list, setList ] = useState([])
    const [ typeTask, setTypeTask ] = useState('atividades')
    const [ yearChart, setYearChart ] = useState(2023)
    const [ showLoading, setShowLoading ] = useState(false)
  
    const convertYearChartOnString = yearChart.toString()
    const yearChartList = (item) => item.ano.toString().includes(convertYearChartOnString)
  
    const total = list.filter(item => yearChartList(item)).length 
    const pendentes = list.filter(item => yearChartList(item) &&  item.realizado.includes('Pendente')).length
    const parcial = list.filter(item => yearChartList(item) && item.realizado.includes('Parcial')).length
        
    useEffect(() => {
      onValue(ref(db, typeTask), (snapshot) => {
        setList([]);
        const data = snapshot.val();
        if (data !== null) {
          Object.values(data).map((lista) => {
            setList((oldArray) => [...oldArray, lista]);
          });
        }
      });
    }, [typeTask]);
    
    return [list, typeTask, setTypeTask, yearChart, setYearChart, total, pendentes, parcial ]
}