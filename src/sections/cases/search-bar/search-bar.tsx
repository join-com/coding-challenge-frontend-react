import React, { createRef } from 'react';

import { Button, Form, Input } from 'antd';

interface IProps {
  query: string;
  onChange: React.Dispatch<string>;
}

export class SearchBar extends React.Component<IProps> {
  public queryInput = createRef<Input>();

  public handleSubmit = (e: React.FormEvent<Form>) => {
    e.preventDefault();

    if (this.queryInput && this.queryInput.current) {
      this.props.onChange(this.queryInput.current.input.value);
    }
  };

  public render() {
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item>
          <Input ref={this.queryInput} defaultValue={this.props.query} placeholder="Search case descriptions" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Find cases
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
