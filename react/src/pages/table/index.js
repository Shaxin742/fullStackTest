import React, { Component } from "react";
import { Table, Button, Form, Input, Tag, message } from "antd";
import { getTableData } from '../../api/components'
import { delNullKeys } from '../../utils/utils'
import './index.scss'

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    sorter: true,
    render: text => <span>{text}</span>,
  },
  {
    title: '日期',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',

    render: (text, record) => (
      <span>
        <Tag color={'geekblue'} >{text}</Tag>
      </span>
    ),
  }
];

class test extends Component {
  state = {
    data: [],
    total: 0,
    loading: false,
    selectedRowKeys: [],
    pageNo: 1,
    pageSize: 10,
  }
  componentDidMount() {
    this.getTableData()
  }

  getTableData(search) {
    let { pageSize, pageNo } = this.state
    let params = { pageSize, pageNo, ...search }
    this.setState({
      loading: true
    })
    getTableData(params).then(res => {
      if(res&&res.code ===200){
        this.setState({
          data: res.data.tableData,
          total: res.data.total,
          loading: false
        })
      }else{
        message.error('查询失败');
        this.setState({
          loading: false
        })
      }
    })
  }

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  handleChange(pagination, filters, sorter) {
    console.log(pagination, filters, sorter)
  }

  // handlePageChange(page) {
  //   this.setState({
  //     pageNo: page
  //   }, () => {
  //     this.getTableData()
  //   })
  // }

  handleSubmit = (e) => {
    e.preventDefault()
    const { validateFields } = this.props.form;
    validateFields((err, values) => {
      if (!err) {
        console.log(values)
        let data = delNullKeys(values)
        this.getTableData(data)
      }
    })
  }

  render() {
    let { data, selectedRowKeys, loading, currentPage, total } = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const paginationProps = {
      page: currentPage,
      // onChange: (page) => this.handlePageChange(page),
      total: total,
      showTotal: (total => `共 ${total} 条`)
    }
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form className='formSearch' layout="inline" onSubmit={this.handleSubmit}>
          <Form.Item label="姓名">
            {getFieldDecorator('name')(
              <Input
                placeholder="name"
                allowClear
                autoComplete="off"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
          </Form.Item>
        </Form>
        <Table
          pagination={paginationProps}
          rowKey={record => record.id}
          loading={loading}
          onChange={this.handleChange}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data} />
      </div>
    )
  }
}

export default Form.create()(test)
