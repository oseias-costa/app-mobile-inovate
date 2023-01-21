import React from 'react';
import { View } from 'react-native'
import { BarChart } from "react-native-chart-kit";
export const ChartBar = ({filterYear}) => {

    let listUsers = []
        const newData = filterYear?.map(item => {
          if(item.responsavel !== undefined){
              const user = item.responsavel.split(' ')
              listUsers.includes(user[0]) ? null :
              listUsers.push(user[0])
          }
        })

    listUsers.sort((a, b) => b - a )

    const valuesChart = []
    const userAmountTasks = listUsers.map(item => {
        const sum = filterYear?.reduce((acc, i) => 
             (i.responsavel.split(' ')[0] === item) !== false ? acc + 1 : acc , 0)
             valuesChart.push(sum)
        }
    )
    
    
    return(
        <View style={{
            alignItens: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            marginBottom: 0,
            width: 310,
            backgroundColor: '#FFF',
            borderWidth: 1,
            borderColor: '#D4D4D4',
            borderRadius: 20
          }
      }>
          <BarChart
        data={{
          labels: [...listUsers],
          datasets: [
            {
              data: [...valuesChart],
            },
          ],
        }}
        width={280}
        height={220}
        yAxisLabel={''}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 38, 75, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />

      </View>
    )
}