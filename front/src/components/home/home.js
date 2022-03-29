import './home.css';
import {Button, Select, Table, notification, Space, Tag} from "antd";
import {useEffect, useState} from "react";

const {Option} = Select;

export function Home() {
    const [tableSelected, setTableSelected] = useState('mcu')
    const [dataSource, setDataSource] = useState([])
    const [columns, setColumns] = useState([])
    let page = 1
    let pageSize = 10
    const [total, setTotal] = useState(10)

    useEffect(() => {
        doRequest()
    }, [])

    const openNotification = message => {
        notification.info({
            message: message,
            placement: "bottomRight"
        });
    };

    function doRequest() {
        const url = window.location.href
        fetch(url + 'api/' + tableSelected + '/columns')
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.hasOwnProperty('errno') || (result.hasOwnProperty('severity') && result.severity === 'ERROR')) {
                       openNotification('Ошибка загрузки колонок')
                    } else {
                        const columns = []
                        result.forEach(column => columns.push(preRenderColumns(column)))
                        setColumns(columns)
                        openNotification('Колонки загружены')
                    }
                },
                (error) => {
                    console.log(error)
                    openNotification('Ошибка загрузки колонок')
                }
            )
        fetch(url + 'api/' + tableSelected + '?page=' + (page - 1) + '&size=' + pageSize)
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.hasOwnProperty('errno') || (result.hasOwnProperty('severity') && result.severity === 'ERROR')) {
                        openNotification('Ошибка загрузки данных')
                    } else {
                        const dataSource = []
                        result.data.forEach(data => dataSource.push(data))
                        setDataSource(dataSource)
                        setTotal(result.total)
                        openNotification('Данные загружены')
                    }
                },
                (error) => {
                    console.log(error)
                    openNotification('Ошибка загрузки данных')
                }
            )
    }

    function preRenderColumns(column) {
        let columnObject
        if (column.column_name === 'enabled') {
            columnObject = {
                title: column.column_name,
                dataIndex: column.column_name,
                key: column.column_name,
                render: column => (
                    <Tag color={column ? 'green' : 'volcano'} key={column}>
                        {column ? 'Включен' : 'Выключен'}
                    </Tag>
                )
            }
        } else {
            columnObject = {
                title: column.column_name,
                dataIndex: column.column_name,
                key: column.column_name
            }
        }
        return columnObject
    }

    function fillTable() {
        const url = window.location.href
        fetch(url + 'api/fill')
            .then(res => res.json())
            .then(
                (result) => {
                    if (!result.hasOwnProperty('errno') && result.filled) {
                        openNotification('Таблица успешно заполнена')
                    } else {
                        openNotification('Ошибка при попытке заполнения')
                    }
                },
                () => {
                    openNotification('Ошибка при попытке заполнения')
                }
            )
    }

    function truncateTable() {
        const url = window.location.href
        fetch(url + 'api/delete')
            .then(res => res.json())
            .then(
                (result) => {
                    if (!result.hasOwnProperty('errno') && result.deleted) {
                        openNotification('Данные удалены')
                    } else {
                        openNotification('Ошибка при попытке удаления')
                    }
                },
                () => {
                    openNotification('Ошибка при попытке удаления')
                }
            )
    }

    function changePage(p, ps) {
        page = p
        pageSize = ps
        fetch(window.location.href + 'api/' + tableSelected + '?page=' + (page - 1) + '&size=' + pageSize)
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.hasOwnProperty('errno') || (result.hasOwnProperty('severity') && result.severity === 'ERROR')) {
                        openNotification('Ошибка загрузки данных')
                    } else {
                        const dataSource = []
                        result.data.forEach(data => dataSource.push(data))
                        setDataSource(dataSource)
                        setTotal(result.total)
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
            <Space>
                <Select defaultValue={tableSelected} style={{width: 200}} onChange={(value) => setTableSelected(value)}>
                    <Option value="mcu">mcu</Option>
                    <Option value="sensor">sensor</Option>
                    <Option value="place">place</Option>
                    <Option value="sm_cross">sm_cross</Option>
                    <Option value="smc_p_cross">smc_p_cross</Option>
                    <Option value="sdata">sdata</Option>
                </Select>
                <Button type="default" onClick={doRequest}>Вывести</Button>
                <Button type="default" onClick={fillTable}>Заполнить sdata</Button>
                <Button type="default" onClick={truncateTable}>Очистить sdata</Button>
            </Space>
            <Table style={{marginTop: 10}} dataSource={dataSource} columns={columns}
                   pagination={{total: total, onChange: changePage}}/>
        </>
    )
}