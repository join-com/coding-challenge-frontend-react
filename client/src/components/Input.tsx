import React, { FC, useState } from "react";
import Styled from "styled-components";
interface IInput {
  className?: string;
  placeholder?: string;
  type?: string;
  postfix ?: any;
}

const Input: FC<IInput> = ({ className, type, postfix, placeholder }) => {
const [focus, setFocus] = useState(false);
const [content, setContent] = useState("");
return <div className={`${className} ${focus ? "focused" : ""} ${content.length ? "full" : "empty"}`}>
  <label>{placeholder}</label>
  <input type={type}
         onChange={(e) => setContent(e.target.value)}
         onFocus={() => setFocus(true)}
         onBlur={() => setFocus(false)}/>
  <span className="postfix">{postfix}</span>
  <div className="underline"/>
</div>;
};

export default Styled(Input)`
  padding: 5px;
  background: #FAFAFA;
  font-size: 1.1em;
  display: inline-block;
  height: 25px;
  margin: 10px;
  border-radius: 2px;
  .underline {
    width: 0%;
    transition: width 0.314s;
    border-bottom: 1px solid black;
  }
  label {
    width: auto;
    position: absolute;
    height: 20px;
    overflow: hidden;
    font-size: 100%;
    display: block;
    transition: font-size 0.314s;
    pointer-events: none;
    display: flex;
    flex-direction: column;
  }
  input {
    border: 0;
    background: transparent;
    height: 90%;
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
        color: black;
      }
    }
  }
  input:focus + span + div.underline {
    width: 100%;
  }
  .postfix {

  }
`;
