import * as React from 'react'
import { Link } from 'react-router-dom'
import * as lo from 'lodash'

import { Incident } from '../../../api'
import { pages } from '../../view/pages'
import { BikeImage } from './BikeImage'
import { formatDate } from '../../../utils'

export type BikeShortInfoProps = {
  incident: Incident
}
export const BikeShortInfo: React.FC<BikeShortInfoProps> = ({ incident }) => (
  <article>
    <style jsx={true}>
      {/* language=SCSS */ `
        article {
          display: flex;
          width: 100%;
          border: 1px solid #ccc;
          :global(a) {
            color: #0577ff;
            text-decoration: none;
            &:hover {
              text-decoration: underline;
            }
          }
          div:last-child {
            margin: 15px 20px;
          }
          & + & {
            margin-top: 20px;
          }
          h3,
          p {
            margin: 0;
          }
          p {
            margin-top: 5px;
            margin-bottom: 5px;
          }
          small {
            color: #666;
            span {
              margin-left: 30px;
            }
          }
        }
      `}
    </style>
    <div>
      <BikeImage src={incident.media.image_url_thumb} />
    </div>
    <div>
      <h3>
        <Link to={(pages.bikeView.path as string).replace(':key', incident.id.toString())}>
          {incident.title}
        </Link>
      </h3>
      <p>{lo.truncate(incident.description, { length: 180 })}</p>
      <p>Location: {incident.location_description || 'Unknown'}</p>
      <small>
        Stolen at: {formatDate(incident.occurred_at * 1000)}
        <span>Reported at: {formatDate(incident.updated_at * 1000)}</span>
      </small>
    </div>
  </article>
)
