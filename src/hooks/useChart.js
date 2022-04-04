import { useEffect, useState } from "react"

const useChart = () => {
  const [chart, setChart] = useState([]);
  useEffect(() => {
    fetch('dashboard.json')
    .then(res => res.json())
    .then(data => setChart(data))
  }, [])
  return [chart, setChart];
}
export default useChart;