import React, { Component } from 'react'
import { Button } from 'igroot'
import IgrootExportExcel from './IgrootExportExcel'

export default class App extends Component {
  handleImportSuccess = (data) => {
    console.log(data, 'data')
  }

  render() {
    const dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }]
    
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }]

    return (
      <IgrootExportExcel 
        fileName="明星档案"
        sheetName="最新"
        columns={columns}
        dataSource={dataSource}
      >
        <Button> 导出数据 </Button>
      </IgrootExportExcel>
    )
  }
} 