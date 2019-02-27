export function bemCls(clsName, elementModifier, state = true) {
  return `${state
    ? clsName.split(' ').map(elemModifCls => (`${elemModifCls}${elementModifier}`)).join(' ')
    : ''
  }`;
}

const ClassNameHelpers = {
  bemCls,
};

export default ClassNameHelpers;
