import * as React from 'react'

export const Container: React.FC = ({ children }) => (
  <div>
    <style jsx={true}>
      {/* language=SCSS */ `
        div {
          max-width: 1080px;
          min-height: 100%;
          width: 100%;
          padding-bottom: 30px;
          background-color: #fff;
          box-shadow: 0 0 10px -3px;
          margin: 0 auto;
        }
      `}
    </style>
    {children}
  </div>
)
