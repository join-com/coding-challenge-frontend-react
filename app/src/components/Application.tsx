import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { configureStore } from '../store'
import { Layout } from './Layout'
import { AppRouter } from './AppRouter'

const store = configureStore()

export const Application: React.FC = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Layout>
        <AppRouter />
      </Layout>
      <style jsx global>
        {/* language=SCSS */ `
          html,
          body {
            margin: 0;
            padding: 0;
            background-color: #eee;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            font-family: sans-serif;
            color: #1a1a1a;
          }

          * {
            box-sizing: border-box;
          }

          #root {
            overflow-y: auto;
            width: 100%;
            height: 100%;
          }
        `}
      </style>
    </Provider>
  </BrowserRouter>
)
