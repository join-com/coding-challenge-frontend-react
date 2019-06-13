import * as React from 'react'

export const EmptyState: React.FC = () => (
  <section>
    <style jsx={true}>
      {/* language=SCSS */ `
        section {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 18px;
        }
      `}
    </style>
    <p>No results</p>
  </section>
)
