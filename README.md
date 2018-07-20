
# 导出 Excel 数据组件

## 何时使用

需要导出 excel 数据到表格中，导出的数据是个二维数组，同时希望定义导出的二维数据的表头。

## 安装方法(请修改您的业务组件的安装方法)

```jsx
  sl add -c igroot-export-excel
```

## API

```jsx
<IgrootExportExcel 
  fileName="文件名"
  sheetName="表名"
  columns={columns}
  dataSource={dataSource}
>
  <Button> 导出数据 </Button>
</IgrootExportExcel>
```

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| style | 样式 | Object | - |
| className | 扩展样式类名 | string | - |
| autoPreview | 是否预览 | boolean | false |
| columns | 导出的表头设置 | array | - |
| dataSource | 导出的数据 | array | - |
| onImportSuccess | 导入成功的回调函数 | function | - |

style: PropTypes.object,
    className: PropTypes.string,
    autoPreview: PropTypes.bool,
    fileName: PropTypes.string,
    sheetName: PropTypes.string,
    columns: PropTypes.array,
    dataSource: PropTypes.array

#### columns
```jsx
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
```