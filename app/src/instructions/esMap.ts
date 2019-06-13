import { Action } from 'redux'

import { Incident } from '../api'

type Form = {
  payload: Incident | Incident[]
  error: boolean
}

function createMapModifier(create: boolean) {
  return function(value: Map<number, Incident>, { error, payload }: Action & Form) {
    if (error) {
      return value
    }

    const newValue = new Map(value)
    const setter = (incident: Incident) => {
      newValue.set(
        incident.id,
        newValue.has(incident.id) && !create
          ? { ...newValue.get(incident.id), ...incident }
          : incident,
      )
    }
    if (Array.isArray(payload)) {
      payload.forEach(setter)
    } else {
      setter(payload)
    }
    return newValue
  }
}

export const updateMap = createMapModifier(false)
export const setMap = createMapModifier(true)
