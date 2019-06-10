### Finder Bikes

## Limitation API:

- `incident_total`: It should be returned from backend side since it relatives to
  database.
- Frontend side, we should not use "trick" by getting all result at first time.
  Because it's not good for performance and it will impacted to user experience.
  This is not a good idea to solve this problem.
- To solve: We should ask backend side to add new `incident_total` field like:

```
{
  "incidents": [{ ... }],
  "incident_total": 221 // backend side should return this value
}
```

## Technologies:

- ✅ ReactJS
- ✅ Redux
- ✅ Redux-saga
- ✅ Typescript
- ✅ Styled-Component
- ✅ Storybook
- ✅ Jest
- ✅ CSS Grid
- ✅ ESlint
- ✅ Prettier

## Live demo:

- App:
  [https://tai-finder-bike.netlify.com](https://tai-finder-bike.netlify.com)

- Storybook:
  [https://tai-finder-bike-storybook.netlify.com](https://tai-finder-bike-storybook.netlify.com)

## Available Scripts

In the project directory, you can run:

### `npm run storybook`

Access Storybook interface.<br> Open http://localhost:6006 to view it in the
browser.

### `npm start`

Runs the app in the development mode.<br> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br> You will also see any lint errors in
the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br> See the section
about
[running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br> It correctly bundles
React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br> Your app is
ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.
