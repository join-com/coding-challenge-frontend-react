import * as React from 'react'

import { Button, Input } from '../../common'

export const Filters: React.FC = () => (
  <div>
    <style jsx={true}>
      {/* language=SCSS */ `
        div {
          padding-bottom: 20px;
          display: flex;
        }
      `}
    </style>
    <Input />
    &nbsp;&nbsp;
    <Button>Search</Button>
  </div>
)
