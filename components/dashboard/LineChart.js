import { View } from 'react-native'
import { LineChart } from "react-native-chart-kit";

export const LineChartF = ({ data }) => {

    let listMonths = []
    const newData = data.map(item => {
      const month = (new Date(item.prazo)).getMonth()
      listMonths.push(month)
    })

    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    const filterMonths = []
    const countMonth = listMonths.map(item => {
      filterMonths.includes(item) ? null : filterMonths.push(item)
    })
    filterMonths.sort((a, b) => a - b )

    const dataChart = []
    const mountData = filterMonths.map(item => 
      dataChart.push({
        x: months[item], 
        y: listMonths.filter(total => total === item).length
      }
    ))

    const chartConfig = {
      backgroundGradientFrom: "#1E2923",
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#08130D",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false // optional
    };


  console.log(dataChart)

  const dataF = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Rainy Days"] // optional
  };

    return(
<View style={{
      alignItens: 'center',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      margin: 10,
      shadowColor: "#404040",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10 }
}>
<LineChart
  data={dataF}
  width={300}
  height={220}
  chartConfig={chartConfig}
/>

</View>


)
}