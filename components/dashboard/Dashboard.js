import { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Button } from 'react-native';
import { AuthContext } from "../context/AuthContext";
import { ChartLine } from './ChartLine';
import { ChartBar } from './ChartBar';
import { useGetItensByYearAndType } from './DashboardServices';
import { CustomButtom } from '../global/components/CustomButton';
import { WhiteLogo } from '../global/components/WhiteLogo';
import { horizontalScale, verticalScale } from '../utils/metricks';

export const Dashboard = () => {
  const { userLogged } = useContext(AuthContext)
  const [list, typeTask, setTypeTask, yearChart, 
    setYearChart, total, pendentes, parcial] = useGetItensByYearAndType()
  const user = userLogged[0] !== undefined ? userLogged[0] : {nome: ''}

  let newYear = []
  const resultado = list?.map(item => {
    newYear.includes(item.ano) || newYear.push(item.ano)
  })

  const filterYear = list?.filter(item => item.ano.toString().includes(yearChart))
  const numberDisplay = (num) => num !== undefined ? num : 0
  list.sort((a, b) => a.ano - b.ano)

console.log(filterYear)
  return (
    <ScrollView>
      <SafeAreaView>
      <View style={styles.container}>
          <WhiteLogo width={horizontalScale(360)} height={verticalScale(90)} />
      <Text style={{flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 22}}>
        <Text style={styles.welcome}>Bem vindo,</Text>
        <Text style={styles.name}> {user.nome.split(' ')[0]}.</Text>
      </Text>
      <View style={styles.buttons}>
      <CustomButtom
        onPress={() => {
          setTypeTask('lo')
          setYearChart(2023)}} 
        title='Licenças Operacionais'
        id='lo'
        status={typeTask}
        />
      <CustomButtom
        onPress={() => {
          setTypeTask('atividades')
          setYearChart(2023)  }} 
        title='Atividades'
        id='atividades'
        status={typeTask}
      />
   
      { newYear?.map( item => {
          return( 
          <CustomButtom 
            onPress={() => {setYearChart(item)}} 
            title={item} 
            key={item}
            id={item}
            status={yearChart}
            />)
        })
      } 
      </View>
      </View>
      <View style={styles.numbersBlock}>
        <View style={styles.numbers}>
          <Text style={styles.subTitle}>Total</Text>
          <Text style={styles.numbersText}>{numberDisplay(total)}</Text>
        </View>
        <View style={styles.numbers}>
          <Text style={styles.subTitle}>Pendentes</Text>
          <Text style={styles.numbersText}>{numberDisplay(pendentes)}</Text>
        </View>
        <View style={styles.numbers}>
          <Text style={styles.subTitle}>Parciais</Text>
          <Text style={styles.numbersText}>{numberDisplay(parcial)}</Text>
        </View>
      </View>
      <View style={{alignItems: 'center', position: 'relative', bottom: 60}}>
        <ChartLine filterYear={filterYear} />
        <ChartBar filterYear={filterYear} />
      </View>
      </SafeAreaView>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00264B',
    alignItems: 'center',
    paddingTop: verticalScale(10),
    paddingBottom: 70,
    paddingTop: 15
  },
  shadow: {  
    shadowColor: "#404040",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    
    elevation: 10
  },
  numbers: {
    width: 90, 
    height: 110, 
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 10,
    alignItens: 'center',
    borderWidth: 1,
    borderColor: '#D4D4D4'
  },
  numbersBlock: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    height: 100,
    position: 'relative',
    bottom: 60
  },
  numbersText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#414141'
  },
  subTitle: {
    fontSize: 10,
    textTransform: 'uppercase',
    color: '#414141',
    marginBottom: 10
  }, 
  welcome: {
    color: '#B9B7B7',
    fontSize: 16,
    alignSelf: 'center',
    marginBottom: 5
  },
  name: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700'
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
    marginBottom: 10
  }
})
