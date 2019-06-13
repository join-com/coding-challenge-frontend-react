import * as React from 'react'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props}>
      <style jsx={true}>
        {/* language=SCSS */ `
          button {
            background-color: #0755ff;
            border: none;
            border-radius: 0;
            outline: none;
            color: #fff;
            cursor: pointer;
            padding: 8px 15px;
            height: 36px;
            font-size: 14px;

            &:hover:not(:focus) {
              background-color: #0640bf;
            }

            &:active {
              box-shadow: 0 3px 6px -2px inset #333;
            }

            &:focus:not(:active) {
              padding: 6px 13px;
              border: 2px solid #053499;
            }
          }
        `}
      </style>
      {children}
    </button>
  )
}
