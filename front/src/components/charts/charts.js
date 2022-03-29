import './charts.css';
import {
    CartesianGrid,
    XAxis,
    BarChart,
    YAxis,
    Legend,
    Tooltip,
    Bar, ResponsiveContainer,
} from "recharts";
import {Button, notification, Select} from "antd";
import {useEffect, useState} from "react";

const {Option} = Select;

const tableData = ['mcu', 'sensor', 'place']

const openNotification = message => {
    notification.info({
        message: message,
        placement: "bottomRight"
    });
};

export function Charts() {
    const [tableSelected, setTableSelected] = useState('mcu')
    const [itemsData, setItemsData] = useState({mcu: [], sensor: [], place: []})
    const [items, setItems] = useState(itemsData[tableData[0]])
    const [itemSelected, setItemSelected] = useState(itemsData[tableData[0]][0])
    const [timeSelected, setTimeSelected] = useState('1')
    const [data, setData] = useState({})
    const [chartNames, setChartNames] = useState([])

    const handleTableChange = value => {
        setTableSelected(value)
        setItems(itemsData[value])
        setItemSelected(itemsData[value][0])
    }

    const handleItemSelected = value => {
        setItemSelected(value)
    }

    useEffect(() => {
        fillItemsData()
    }, [])

    function fillItemsData() {
        const url = window.location.origin
        fetch(url + '/api/mcu/name')
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.hasOwnProperty('errno') || (result.hasOwnProperty('severity') && result.severity === 'ERROR')) {
                        openNotification('Ошибка загрузки наименований')
                    } else {
                        const names = []
                        result.forEach(name => names.push(name.name))
                        const iData = itemsData
                        iData.mcu = names
                        setItemsData(iData)
                    }
                },
                (error) => {
                    console.log(error)
                    openNotification('Ошибка загрузки наименований')
                }
            )
        fetch(url + '/api/sensor/name')
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.hasOwnProperty('errno') || (result.hasOwnProperty('severity') && result.severity === 'ERROR')) {
                        openNotification('Ошибка загрузки наименований')
                    } else {
                        const names = []
                        result.forEach(name => names.push(name.name))
                        const iData = itemsData
                        iData.sensor = names
                        setItemsData(iData)
                    }
                },
                (error) => {
                    console.log(error)
                    openNotification('Ошибка загрузки наименований')
                }
            )
        fetch(url + '/api/place/name')
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.hasOwnProperty('errno') || (result.hasOwnProperty('severity') && result.severity === 'ERROR')) {
                        openNotification('Ошибка загрузки наименований')
                    } else {
                        const names = []
                        result.forEach(name => names.push(name.name))
                        const iData = itemsData
                        iData.place = names
                        setItemsData(iData)
                    }
                },
                (error) => {
                    console.log(error)
                    openNotification('Ошибка загрузки наименований')
                }
            )
    }

    function fillChartData() {
        const url = window.location.origin + '/api/' + tableSelected + '/chart?name=' + itemSelected + '&hours=' + timeSelected
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.hasOwnProperty('errno') || (result.hasOwnProperty('severity') && result.severity === 'ERROR')) {
                        openNotification('Ошибка загрузки данных')
                    } else {
                        const names = []
                        result.names.forEach(name => names.push(name.name))
                        setChartNames(names)
                        const chartData = {}
                        names.forEach(name => chartData[name] = [])
                        result.data.forEach(item => {
                            const obj = {
                                datetime: item.datetime
                            }
                            obj[item.name] = item.value
                            chartData[item.name].push(obj)
                        })
                        setData(chartData)
                    }
                },
                (error) => {
                    console.log(error)
                    openNotification('Ошибка загрузки данных')
                }
            )
    }

    return (
        <>
            <div><Select placeholder={'Таблица'} style={{width: 200, marginBottom: 4}} onChange={handleTableChange}>
                {tableData.map(table => (
                    <Option key={table}>{table}</Option>
                ))}
            </Select></div>
            <div><Select value={itemSelected} style={{width: 200, marginBottom: 4}} onChange={handleItemSelected}>
                {items.map(item => (
                    <Option key={item}>{item}</Option>
                ))}
            </Select></div>
            <div><Select defaultValue={timeSelected} style={{width: 200, marginBottom: 4}}
                         onChange={(value) => setTimeSelected(value)}>
                <Option value="1">1 час</Option>
                <Option value="2">2 часа</Option>
                <Option value="6">6 часов</Option>
                <Option value="12">12 часов</Option>
                <Option value="24">24 часа</Option>
            </Select></div>
            <Button type="default" style={{marginBottom: 4}} onClick={fillChartData}>Вывод</Button>
            {chartNames.map(chartName => (
                <ResponsiveContainer width='100%' height={80.0 / chartNames.length + '%'}>
                    <BarChart
                        data={data[chartName]}
                        margin={{
                            top: 5,
                            right: 20,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="datetime"/>
                        <YAxis domain={[-25, 125]}/>
                        <Tooltip/>
                        <Legend/>
                        <Bar type="monotone" animationDuration={0} isAnimationActive={false} dataKey={chartName} fill='#8884d8'/>
                    </BarChart>
                </ResponsiveContainer>
            ))}
        </>
    )
}