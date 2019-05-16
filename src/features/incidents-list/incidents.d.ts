declare type Incident = {
  id: number
  title: string
  description: string
  address: string
  occurred_at: number
  updated_at: number
  media: {
    image_url: null | string
    image_url_thumb: null | string
  }
  type: string
}
declare type Incidents = Array<Incident>

declare type NormalizedIncidents = {
  [id: string]: Incident
}

declare type PagingData = {
  pages: {
    [page: string]: Incidents
  }
  pagesCount: number
}
