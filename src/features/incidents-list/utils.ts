interface PagesMap {
  [page: string]: Incidents
}

type MapToPages = (
  incidents: NormalizedIncidents,
) => {
  pages: PagesMap
  pageCount: number
}

const byTimeOccured = (a: Incident, b: Incident) =>
  b.occurred_at - a.occurred_at

export const mapToPages: MapToPages = (incidents) => {
  const incidentsByTime = Object.values(incidents).sort(byTimeOccured)
  const pagesCount = Math.ceil(incidentsByTime.length / 10)
  const incidentsByPage: PagesMap = {}
  for (let page = 1; page <= pagesCount; page++) {
    incidentsByPage[page] = incidentsByTime.splice(0, 10)
  }
  console.log('rest incidents', incidentsByTime)
  return {
    pages: incidentsByPage,
    pageCount: Object.keys(incidentsByPage).length,
  }
}

export const identity = (value: string) => value
