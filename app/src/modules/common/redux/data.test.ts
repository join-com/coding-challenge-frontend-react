import { ExtractedPack } from 'redux-packed'
import * as lo from 'lodash'

import { pack } from './data'
import { extractPack } from '../../../utils'

describe('common.data redux pack', () => {
  const extracted = {} as ExtractedPack<typeof pack>
  beforeEach(() => {
    Object.assign(extracted, extractPack(pack))
  })

  it('should extract valid items', () => {
    expect(lo.isFunction(extracted.reducer)).toBeTruthy()
    expect(lo.isPlainObject(extracted.actions)).toBeTruthy()
    expect(lo.isPlainObject(extracted.selectors)).toBeTruthy()
  })

  it('should extract correct reducer', () => {
    const state = extracted.reducer(undefined as any, { type: '@@INIT' })
    expect(extracted.selectors.incidents(state).size).toEqual(0)
  })

  it('should extract correct actions and handlers', () => {
    const incident = { id: 1, title: '', description: 'Theft' }
    const state = extracted.reducer(undefined as any, extracted.actions.set(incident as any))
    expect(extracted.selectors.incident(state, 1)).toEqual(incident)
    const updatedIncident = { id: 1, title: 'Test' }
    const updatedState = extracted.reducer(state, extracted.actions.update(updatedIncident as any))
    expect(extracted.selectors.incident(updatedState, 1)).toEqual({
      ...incident,
      ...updatedIncident,
    })
  })
})
