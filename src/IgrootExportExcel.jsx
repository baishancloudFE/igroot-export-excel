import './IgrootExportExcel.css'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import XLSX from 'xlsx'

import { ExcelSetting } from './ExcelSetting'


export default class IgrootExportExcel extends Component {
  static displayName = 'IgrootExportExcel'

  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    autoPreview: PropTypes.bool,
    fileName: PropTypes.string,
    sheetName: PropTypes.string,
    columns: PropTypes.array,
    dataSource: PropTypes.array,
    onExportSuccess: PropTypes.func
  }

  static defaultProps = {
    style: {},
    className: '',
    fileName: '表格文件名',
    sheetName: '表',
    autoPreview: true,
    columns: {},
    dataSource: [],
    onExportSuccess: () => {}
  }

  constructor(props) {
    super(props)
    const { columns, dataSource } = props 

    this.state = {
      visible: false,
      columns,
      dataSource
    }
  }

  componentWillReceiveProps(nextProps) {
    if (('dataSource' in nextProps) || ('columns' in nextProps)) {
      const { dataSource, columns } = nextProps
      
      this.setState({
        dataSource,
        columns
      })
    }
  }

  getExportData = () => {
    const { columns, dataSource } = this.state 
    const data = []

    data.push(columns.map(item => item.title))
    dataSource.map(item => {
      const row = []
      columns.map(col => row.push(item[col.key || col.dataIndex]))

      data.push(row)
    })
    
    return data 
  }

  handleBeforeExport = () => {
    const { autoPreview } = this.props 

    if (autoPreview) {
      this.handleExport()
    }
  }

  handleExport = () => {
    const { fileName, sheetName } = this.props 
    const data = this.getExportData()
    const wb = XLSX.utils.book_new()
    const ws = XLSX.utils.aoa_to_sheet(data)
    XLSX.utils.book_append_sheet(wb, ws, sheetName)
    XLSX.writeFile(wb, `${fileName}.xlsx`)
  }

  render() {
    const { children, className, style } = this.props

    return (
      <div className={`igroot-export-excel ${className || ''}`} style={style} onClick={this.handleBeforeExport}>
        {children}
      </div>
    )
  }
}

const styles = {
  modal: {
    maxWidth: 1200
  },
  alert: {
    marginBottom: 30
  }
}
