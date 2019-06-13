import * as React from 'react'

import { Button } from './Button'

export type ErrorStateProps = {
  retry: () => any
}

export const ErrorState: React.FC<ErrorStateProps> = ({ retry }) => (
  <section>
    <style jsx={true}>
      {/* language=SCSS */ `
        section {
          display: flex;
          flex: 1;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          h2,
          p {
            margin: 0;
            line-height: 1.4;
          }
          span {
            margin-top: 15px;
          }
        }
      `}
    </style>
    <h2>Oops!</h2>
    <p>Could not load the data</p>
    <span>
      <Button onClick={retry}>Retry</Button>
    </span>
  </section>
)
