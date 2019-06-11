import * as React from 'react'

export type BikeImageProps = {
  src: string | null
}
export const BikeImage: React.FC<BikeImageProps> = ({ src }) => (
  <div>
    <style jsx={true}>
      {/* language=SCSS */ `
        div {
          background-color: #efefef;
          display: flex;
          justify-content: center;
          align-items: center;
          &,
          img {
            width: 150px;
            height: 150px;
          }
          p {
            color: #808080;
            font-size: 18px;
            text-transform: uppercase;
          }
        }
      `}
    </style>
    {src ? <img src={src} alt="Bike image" /> : <p>No image</p>}
  </div>
)
