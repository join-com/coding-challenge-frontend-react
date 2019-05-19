import React from 'react';

interface Props {}

export class Layout extends React.PureComponent<Props> {
    public render() {
        return <div>{this.props.children}</div>;
    }
}
