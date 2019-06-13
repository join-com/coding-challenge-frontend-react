import * as React from 'react'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  onValueChange?: (newValue: string) => void
}

export const Input: React.FC<InputProps> = ({ onValueChange, ...props }) => {
  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    props.onChange && props.onChange(event)
    onValueChange && onValueChange(event.target.value)
  }
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
            font-size: 14px;
            height: 36px;
            &:focus {
              border-color: #0577ff;
            }
          }
        `}
      </style>
      <input onChange={onChange} {...props} />
    </>
  )
}
