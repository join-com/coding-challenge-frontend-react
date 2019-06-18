import React, { FC, useEffect, useState } from "react";
import Styled from "styled-components";
interface IInput {
  className?: string;
  placeholder?: string;
  type?: string;
  postfix ?: any;
  onChange?: (value: string) => void;
}

const Input: FC<IInput> = ({ className, type, postfix, placeholder, onChange }) => {
const [focus, setFocus] = useState(false);
const [content, setContent] = useState("");
useEffect(() => {
  if (onChange) { onChange(content); }
}, [content]);
return <div className={`${className} ${focus ? "focused" : ""} ${content.length ? "full" : "empty"}`}>
  <div className="overline">
    <label>{placeholder}</label>
    <input type={type}
           onChange={(e) => setContent(e.target.value)}
           onFocus={() => setFocus(true)}
           onBlur={() => setFocus(false)}/>
    <span className="postfix">{postfix}</span>
  </div>
  <div className="underline-premament"/>
  <div className="underline"/>
</div>;
};

export default Styled(Input)`
  padding: 0;
  font-size: 1.1em;
  display: flex;
  flex-direction: column;
  height: 40px;
  margin: 5px;
  border-radius: 2px;
  color: inherit;
  .overline {
    display: flex;
    padding: 2px;
  }
  .underline-premament {
    width: 100%;
    height: 2px;
    transition: width 0.314s;
    border-bottom: 1px solid white;
  }
  .underline {
    width: 0%;
    height: 0%;
    transition: width 0.314s;
    border-bottom: 1px solid white;
  }
  label {
    width: auto;
    height: 20px;
    position: fixed;
    overflow: hidden;
    font-size: 100%;
    display: block;
    transition: font-size 0.314s;
    pointer-events: none;
    display: flex;
    flex-direction: column;
  }
  @media(max-width: 500px) {
    label {
      position: relative;
      font-size: 8px;
    }
  }
  input {
    border: 0;
    width: 100%;
    background: transparent;
    height: 90%;
    padding: 10px 0 0 0;
    color: inherit;
    &:focus{
      outline: none;
    }
    &[type="date"] {
      color: transparent;
    }
  }
  &.focused label, &.full label{
      font-size: 8px;
      flex-direction: row;
  }
  &.focused, &.full {
    input {
      &[type="date"] {
        color: inherit;
      }
    }
    .underline {
      width: 100%;
    }
  }
`;
