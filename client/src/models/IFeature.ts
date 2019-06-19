interface IProperties {
  type: string;
  id: number;
  occured_at: number;
}
interface IGeometry {
  type: string;
  coordinates: [number, number];
}
interface IFeature {
  type: string;
  properties: IProperties;
  geometry: IGeometry;
}
export default IFeature;
