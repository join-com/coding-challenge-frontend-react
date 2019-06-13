import * as React from 'react'

export const Content: React.FC = ({ children }) => (
  <div>
    <style jsx={true}>
      {/* language=SCSS */ `
        div {
          padding: 20px 40px;
          display: flex;
          flex: 1;
          flex-direction: column;
        }
      `}
    </style>
    {children}
  </div>
)
