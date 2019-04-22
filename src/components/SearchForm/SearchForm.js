import React from 'react'
import PropTypes from 'prop-types'
import {
  Form,
  Row,
  Col,
  Input,
  Button,
  DatePicker
} from 'antd'
const { RangePicker } = DatePicker

const SearchForm = ({handleQuery, handleDate}) => {
  return (
    <Form layout="inline">
      <Row gutter={16} type="flex" justify="space-between">
        <Col span={12}>
          <Input onChange={handleQuery} placeholder="Search case descriptions" />
        </Col>
        <Col span={8}>
          <RangePicker onChange={handleDate} />
        </Col>
        <Col span={4}>
          <Button
            type="primary"
            icon="search"
            htmlType="submit"
            block
          >
            Find cases
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

SearchForm.propTypes = {
  handleQuery: PropTypes.func.isRequired,
  handleDate: PropTypes.func.isRequired
}

export default SearchForm