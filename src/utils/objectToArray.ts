export default function<T = any>(obj: { [key: string]: T }): Array<T> {
  return Object.keys(obj).map(key => obj[key]);
}
