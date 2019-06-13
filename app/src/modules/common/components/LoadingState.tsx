import * as React from 'react'

export const LoadingState: React.FC = () => (
  <section>
    <style jsx={true}>
      {/* language=SCSS */ `
        section {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          div {
            font-size: 24px;
            &:before {
              @keyframes spin {
                0% {
                  transform: rotate(0);
                }
                100% {
                  transform: rotate(360deg);
                }
              }
              margin: 0 auto;
              display: block;
              content: '';
              width: 60px;
              height: 60px;
              border-radius: 50%;
              border: 3px solid;
              border-color: #0755ff #0755ff #fff;
              animation: spin 1s linear infinite;
              margin-bottom: 20px;
            }
          }
        }
      `}
    </style>
    <div>Loading...</div>
  </section>
)
