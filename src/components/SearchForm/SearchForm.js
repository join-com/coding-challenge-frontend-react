import React from 'react'
import {
  Form,
  Input,
  Button,
  DatePicker
} from 'antd'
const { RangePicker } = DatePicker

const SearchForm = () => {
  return (
    <Form layout="inline">
      <Form.Item>
        <Input placeholder="Search case descriptions" />
      </Form.Item>
      <Form.Item>
        <RangePicker onChange={(date, dateString) => console.log(date, dateString)} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" icon="search" htmlType="submit">Find cases</Button>
      </Form.Item>
    </Form>
  )
}

export default SearchForm