import * as React from 'react'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<InputProps> = ({ ...props }) => {
  return (
    <>
      <style jsx={true}>
        {/* language=SCSS */ `
          input {
            border-radius: 0;
            background-color: #fff;
            border: 1px solid #ccc;
            padding: 8px;
            outline: none;
            width: 100%;
            display: inline-flex;
            height: 36px;
            &:focus {
              border-color: #0577ff;
            }
          }
        `}
      </style>
      <input {...props} />
    </>
  )
}
