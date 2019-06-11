import * as React from 'react'

export const Header: React.FC = () => (
  <div>
    <style jsx>
      {/* language=SCSS */ `
        div {
          width: 100%;
          padding: 30px 15px 30px 50px;
          display: flex;

          img {
            width: 100px;
            margin-right: 20px;
          }

          h1 {
            margin: 15px 0 0;
            font-size: 36px;
            line-height: 42px;
          }

          p {
            margin: 0;
            line-height: 28px;
            font-size: 24px;
          }
        }
      `}
    </style>
    <img src="/assets/logo.png" alt="Logo" />
    <aside>
      <h1>Police Department of Berlin</h1>
      <p>Stolen bikes</p>
    </aside>
  </div>
)
