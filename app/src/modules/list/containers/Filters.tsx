import * as React from 'react'

import { Button, Input } from '../../common'
import { useActions } from '../../../hooks'
import { Filter } from '../redux/ui'

export const Filters: React.FC = () => {
  const actions = useActions()
  const [searchText, setSearchText] = React.useState('')
  const [from, setFrom] = React.useState('')
  const [to, setTo] = React.useState('')
  function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    const newFilter = { search: searchText } as Filter
    if (from) {
      newFilter.from = Date.parse(from) / 1000
    }
    if (to) {
      newFilter.to = Date.parse(to) / 1000
    }
    if (newFilter.from && newFilter.to && newFilter.from > newFilter.to) {
      delete newFilter.from
      delete newFilter.to
      // could be improved by using useReducer or batchUpdates
      setFrom('')
      setTo('')
    }
    console.log(newFilter)
    actions.search(newFilter)
  }
  return (
    <form onSubmit={onSubmit}>
      <section>
        <style jsx={true}>
          {/* language=SCSS */ `
            section {
              padding-bottom: 20px;
              display: flex;
              div {
                margin-left: 10px;
                width: 140px;
                &:last-of-type {
                  margin-right: 10px;
                }
              }
            }
          `}
        </style>
        <Input placeholder="Search..." value={searchText} onValueChange={setSearchText} />
        <div>
          <Input type="date" placeholder="From" value={from} onValueChange={setFrom} />
        </div>
        <div>
          <Input type="date" placeholder="To" value={to} onValueChange={setTo} />
        </div>
        <Button type="submit">Search</Button>
      </section>
    </form>
  )
}
