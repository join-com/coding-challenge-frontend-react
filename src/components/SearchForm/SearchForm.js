import React from 'react'
import PropTypes from 'prop-types'
import {
  Form,
  Input,
  Button,
  DatePicker
} from 'antd'
const { RangePicker } = DatePicker

const SearchForm = ({handleQuery, handleDate}) => {
  return (
    <Form layout="inline">
      <Form.Item>
        <Input onChange={handleQuery} placeholder="Search case descriptions" />
      </Form.Item>
      <Form.Item>
        <RangePicker onChange={handleDate} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" icon="search" htmlType="submit">Find cases</Button>
      </Form.Item>
    </Form>
  )
}

SearchForm.propTypes = {
  handleQuery: PropTypes.func.isRequired,
  handleDate: PropTypes.func.isRequired
}

export default SearchForm