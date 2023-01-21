import React, { useEffect, useState } from 'react';
import { View } from 'react-native'
import { LineChart } from "react-native-chart-kit";

export const ChartLine = ({ data, filterYear }) => { 
    
    let listMonths = []
    const newData = filterYear?.map(item => {
      const month = (new Date(item.prazo)).getMonth()
      listMonths.push(month)
    })

    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    const filterMonths = []
    const countMonth = listMonths.map(item => {
      filterMonths.includes(item) ? null : filterMonths.push(item)
    })
    filterMonths.sort((a, b) => a - b )

    const monthChart = []
    const valuesChart = []
    const mountMonthChart = filterMonths.map(item => 
      monthChart.push(months[item]))
    const mountValuesChart = filterMonths.map(item => 
        valuesChart.push(listMonths.filter(total => total === item).length))
        
    return(
        <View style={{
            borderRadius: 5,
            marginBottom: 25,
            marginTop: 15,
            width: 310,
            backgroundColor: '#FFF',
            borderWidth: 1,
            borderColor: '#D4D4D4',
            borderRadius: 20
          }        
      }>
      <View style={{
        position: 'relative',
        right: 20,
        top: 10
      }}>
      <LineChart
        data={{
          labels: [...monthChart],
          datasets: [
            {
              data: [...valuesChart ],
            },
          ],
        }}
        width={310} // from react-native
        height={220}
        yAxisLabel={''}
        chartConfig={{
          backgroundColor: 'transparent',
          backgroundGradientFrom: 'transparent',
          backgroundGradientTo: 'transparent',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 255) => `rgba(0, 38, 75, ${opacity})`,
          style: {
            borderRadius: 10,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 46,
        }}
      />
        </View>
      </View>
    )
}