import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Skeleton, Form } from 'antd';
import defaultBike from '../../images/icons/logo.svg';

import messages from './home.messages';
import {
  Container,
  ContainerLeftAlign,
  ContainerHeader,
  StyledList,
  StyledDatePicker as RangePicker,
  StyledButton as Button,
  StyledInput as Input,
  StyledImage,
} from './home.styles';
import { H1, H2 } from '../../theme/typography';

export class Home extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    language: PropTypes.string.isRequired,
    loadList: PropTypes.func.isRequired,
    selectBikeInfo: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.any,
    history: PropTypes.any,
    getFieldDecorator: PropTypes.func,
    form: PropTypes.object,
  };
  componentDidMount() {
    this.props.loadList(1, 1000, 'theft', 'berlin', null, null, null);
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { date, search } = values;
        if (date && date.length) {
          const [startDate, endDate] = date;
          this.props.loadList(1, 1000, 'theft', 'berlin', search, startDate.unix(), endDate.unix());
        } else {
          this.props.loadList(1, 1000, 'theft', 'berlin', search, null, null);
        }
      }
    });
  };
  render() {
    const { list, error, loading } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <Container>
        <Helmet title={this.props.intl.formatMessage(messages.pageTitle)} />
        <ContainerHeader>
          <H1> Police Department of Berlin</H1>
          <H2> Stolen bikes</H2>
        </ContainerHeader>
        <ContainerHeader>
          <Form layout="inline" onSubmit={this.handleSubmit}>
            <Form.Item>
              {getFieldDecorator('search', {
                rules: [{ required: false }],
              })(<Input placeholder="Word to look for in cases..." />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('date', {
                rules: [{ required: false }],
              })(<RangePicker />)}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" disabled={loading}>
                Search cases
              </Button>
            </Form.Item>
          </Form>
        </ContainerHeader>
        {!error && (
          <ContainerLeftAlign>
            <StyledList
              itemLayout="vertical"
              size="large"
              pagination={{
                pageSize: 10,
                total: this.props.list.length,
              }}
              dataSource={list}
              loading={loading}
              footer={
                <div id="total-cases">
                  <b>Total of {this.props.list.length}</b>
                </div>
              }
              header={
                <div>
                  <b>Total of {this.props.list.length}</b>
                </div>
              }
              renderItem={item => (
                <StyledList.Item
                  onClick={() => {
                    this.props.selectBikeInfo(item);
                    this.props.history.push(`/${this.props.language}/incident/${item.id}`);
                  }}
                  key={item.id}
                  extra={!loading && <StyledImage alt="logo" src={item.media.image_url || defaultBike} />}
                >
                  <Skeleton loading={loading} active avatar>
                    <StyledList.Item.Meta
                      title={<a href={item.href}>{item.title}</a>}
                      description={`${item.address} on ${new Date(item.occurred_at * 1000).toLocaleDateString()} `}
                    />
                    <p> {item.description || 'No description... '}</p>
                    <p>
                      Updated at:
                      <strong> {new Date(item.updated_at * 1000).toLocaleString()} </strong>
                    </p>
                  </Skeleton>
                </StyledList.Item>
              )}
            />
          </ContainerLeftAlign>
        )}
        {error && error.error && <H2> Error happened, Please try again.</H2>}
      </Container>
    );
  }
}
