# Stolen Bike Index - JOIN Coding Challenge - Frontend (React)

![JOIN Stolen Bike Cases](https://github.com/join-com/coding-challenge-frontend-react/raw/master/illustration.png)

## Live Demo

[https://yakhinvadim.github.io/coding-challenge-frontend-react/](https://yakhinvadim.github.io/coding-challenge-frontend-react/).

## My comment on the challenge

Hey join.com team, thank you for this challenge! I really enjoyed doing it.

I want you to know a couple of things about my solution:

1. I fetch cases for London area, since it has much more cases and better demonstrates how I implemented the pagination.

   - First, I load and show the exact 10 cases for the current page. This allows user to start interracting with the page really fast.
   - Then, I load all cases for the current search parameters. That allows us to show total number of cases and turns on client-side pagination, so that the user would not wait for the next pages to load.

1. I implemented saving search params to url string, so it could be bookmarked or shared with anybody.

1. I tried to work more with React hooks, so I didn't use Redux. It does not scale well, but works for the small projects like this.

1. I would do some more things If I had more time:
   - [ ] Fork pagination package and make it possible to use RouterLink instead of Button in Pagination. That way, it would be possible to open pages in new tabs.
   - [ ] Bundle splitting. Especially load react-map-gl package dynamically, since it takes almost half the bundle.
   - [ ] Lift the state up and pass it using Context API (or simply use Redux), to avoid redownloading incidents data on navigation.
   - [ ] Tests. If you want to look at how I write tests, you can check out [my other project](https://github.com/yakhinvadim/longman-to-anki). It has 80% test coverage.

## Context

Stolen bikes are a typical problem in Berlin. The Police want to be more efficient in resolving stolen bike cases. They decided to build a software that can automate their processes — the software that you're going to develop.

This app needs to display the list of reported bike thefts based on the Bikewise [API](https://www.bikewise.org/documentation/api_v2).

## Product Requirements

### Must have

As a police officer:

- [x] I want to see a list of reported bike thefts for the Berlin area.
- [x] I want to see the first 10 bike theft cases, with the ability to - paginate (10 cases per page).
- [x] I want to see a total number of bike theft cases.
- [x] For each reported bike theft I want to see:
  - [x] Case title
  - [x] Case description
  - [x] Date of the theft
  - [x] Date of when the case was reported
  - [x] Location of the theft
  - [x] Picture of the bike, if available
- [x] I want to filter reported bike thefts by partial case title.
- [x] I want to see a loading state until the list is available.
- [x] I want to see an error state if the list is unavailable.
- [x] I want to see an empty state if there are no results.

### Nice to have

After all must-have requirements have been met, some of the following nice-to-have items can also be included in the app.

As a police officer:

- [x] I want to filter reported bike thefts by date range.
- [x] I want to see a case detail page that shows:
  - [x] Case description
  - [x] Date of the theft
  - [x] Date of when the case was reported
  - [x] Location of the theft
  - [x] Map of the location

## Your Mission

Create the React application that satisfies all must-have requirements above, plus any nice-to-have requirements you wish to include.

For that, you’ll need to make requests to a publicly-available [API](https://www.bikewise.org/documentation/api_v2) to get JSON content and print it on view.

The API is known to have some limitations. If you are not able to implement a particular requirement, please provide a description of what and why you could not implements.

For the layout of each page, please refer to the provided wireframes:

- [Index page](./screens/index.png)
- [Error state](./screens/index_error.png)
- [Empty state](./screens/index_empty.png)
- [Loading state](./screens/index_loading.png)
- [Details page](./screens/details.png)

Also, you can take inspiration from these resources:

- [BikeIndex](https://bikeindex.org/bikes?serial=&button=&location=Berlin&distance=100&stolenness=proximity)
- [BikeWise](https://bikewise.org)

You can use any boilerplate/approach you prefer (nextjs, create react app, ...), but try to keep it simple. We encourage you to use your favorite tools and packages to build a solid React application.

You can assume that you do not have to support legacy browsers. Feel free to use modern features such as **fetch** or **flexbox**.

Host the website on the service of your choice (zeit, Heroku, AWS, GCloud, ...)

## Tech Requirements

- React
- Tests: Jest + react-testing-library / enzyme
- Code Linter
- Typescript is a plus
- CSSinJS is a plus: styled-components, styled-system, ...

## Instructions

- Fork this repo
- The challenge is on!
- Build a performant, clean and well-structured solution
- Commit early and often. We want to be able to check your progress
- Make the app public. Deploy it using the service of your choice
- Create a pull request
- Please complete your working solution within 7 days of receiving this challenge, and be sure to notify us when it is ready for review.

## License

We have licensed this project under the MIT license so that you may use this for a portfolio piece (or anything else!).
