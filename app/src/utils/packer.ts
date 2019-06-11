import { createPacker } from 'redux-packed'
import { createEpicPackerMiddleware } from 'redux-packed-observable-middleware'
export const { combinePacks, extractPack, createPack, mergeExtractedPacks } = createPacker([
  createEpicPackerMiddleware(),
])
