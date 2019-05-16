interface PagesMap {
  [page: string]: Incidents
}

type MapToPages = (incidents: NormalizedIncidents) => PagingData

const byTimeOccured = (a: Incident, b: Incident) =>
  b.occurred_at - a.occurred_at

export const mapToPages: MapToPages = (incidents) => {
  const incidentsByTime = Object.values(incidents).sort(byTimeOccured)
  const pagesCount = Math.ceil(incidentsByTime.length / 10)
  const incidentsByPage: PagesMap = {}
  for (let page = 1; page <= pagesCount; page++) {
    incidentsByPage[page] = incidentsByTime.splice(0, 10)
  }
  return {
    pages: incidentsByPage,
    pagesCount,
  }
}

export const identity = (value: any) => value

type NormalizeById = (incidents: Incidents) => NormalizedIncidents

export const normalizeById: NormalizeById = incidents =>
  incidents.reduce((acc: NormalizedIncidents, current) => {
    const { id } = current
    acc[id] = current
    return acc
  }, {})
