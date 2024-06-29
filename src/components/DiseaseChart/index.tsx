import { JSXElement, onMount } from "solid-js";
import { Chart, Title, Tooltip, Legend, LineElement, ChartData, ChartOptions, LineController, CategoryScale, LinearScale, PointElement } from "chart.js"
import "./index.scss"

interface DiseaseData {
  name: string
  values: {
    year: number
    value: number
  }[]
}

const diseaseData: DiseaseData[] = [
  {
    name: "Covid-19",
    values: [
      { year: 2023, value: 5 },
      { year: 2024, value: 1 }
    ]
  },
  {
    name: "Malaria",
    values: [
      { year: 2023, value: 102 },
      { year: 2024, value: 145 }
    ]
  },
  {
    name: "Hypertension",
    values: [
      { year: 2023, value: 43 },
      { year: 2024, value: 51 }
    ]
  },
  {
    name: "Diabetes",
    values: [
      { year: 2023, value: 9 },
      { year: 2024, value: 15 }
    ]
  },
  {
    name: "Diarrhea",
    values: [
      { year: 2023, value: 102 },
      { year: 2024, value: 54 }
    ]
  },
  {
    name: "Cancer",
    values: [
      { year: 2023, value: 19 },
      { year: 2024, value: 5 }
    ]
  },
  {
    name: "Stroke",
    values: [
      { year: 2023, value: 20 },
      { year: 2024, value: 15 }
    ]
  }



]

const chartData: ChartData = {
  labels: diseaseData.map(disease => disease.name),
  datasets: [

    {
      label: "Last Year",
      borderColor: "#ABA8CC",
      backgroundColor: "#ABA8CC",
      borderRadius: 100,
      data: diseaseData.map(disease => disease.values.find(d => d.year === 2023)?.value ?? 0)
    },

    {
      label: "This Year",
      borderColor: "hotpink",
      backgroundColor: "hotpink",
      data: diseaseData.map(disease => disease.values.find(d => d.year === 2024)?.value ?? 0)
    }

  ]
}

const chartOptions: ChartOptions = {
  font: {
    style: "italic",
    size: 17
  },
  animation: false,
  aspectRatio: 2.25,
  layout: {
    padding: {
      x: 15,
      y: 20
    }
  },

  plugins: {
    legend: {
      position: "top",
      align: "end"
    },
  }
}

export const DiseaseChart = (): JSXElement => {
  // eslint-disable-next-line prefer-const
  let diseaseChart: HTMLCanvasElement = null as unknown as HTMLCanvasElement;
  let chart: Chart;

  onMount(() => {
    Chart.register(
      Title,
      Tooltip,
      Legend,
      LineController,
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement
    );
    Chart.defaults.font.family = "'DM Sans', Poppins, sans serif"

    chart = new Chart(diseaseChart, {
      type: "line",
      data: chartData,
      options: chartOptions
    })

    document.fonts.onloadingdone = () => {
      chart.update()
      console.log(diseaseChart)
    }
  })




  return <div id="div-dchart" class="dchart-main">
    <canvas ref={diseaseChart} width={700} height={700}></canvas>
  </div>


}
