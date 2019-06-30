import { always, complement, equals, ifElse, isNil } from 'ramda';

export const renderWhen = (pred, fn) => ifElse(pred, fn, always(null));

export const renderWhenNotNil = fn => renderWhen(complement(isNil), fn);

export const renderWhenTrue = fn => renderWhen(equals(true), fn);

export const renderWhenTrueOtherwise = (fn, otherwise) => ifElse(equals(true), fn, otherwise);

export const styleWhenTrue = (fn, styleTrue, styleFalse = null) => props =>
  ifElse(equals(true), always(styleTrue), always(styleFalse))(fn(props));
