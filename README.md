# Stolen Bike Index - JOIN Coding Challenge - Frontend (React)

## App website 
https://vlad-ua.github.io/coding-challenge-frontend-react/

## Features and technical stack
1. React
2. Tests: Jest + Enzyme (coverage 92%)
3. ESLint -- all errors and warnings solved.
4. CSSinJS (styled-components).
5. When visitor come to the Case Page from the list, there is no additional request to /v2/incidents/{id}.
6. When visitor come directly to the Details Page then App will make 2 requests: first to /v2/incidents/{id} to get main data for Incident and second to get data for a geolocation.
7. In Search block added an additional check: "To" must be greater than date "From".
8. For usability added scrolling to top of the page on opening a new page of incidents.
9. For the Case Page added Google Map with a position of an incident.

### Must have (DONE)
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

### Nice to have (DONE)
- [x] I want to filter reported bike thefts by date range.
- [x] I want to see a case detail page that shows:
  - [x] Case description
  - [x] Date of the theft
  - [x] Date of when the case was reported
  - [x] Location of the theft
  - [x] Map of the location

## Recommendation for API improvements (based on the test task):
1. Add the value of Total incidents into JSON or change CORS restrictions. 
At this moment the value located in the header of the response. 
Due to CORS restriction is not possible to get a list of all values from the response header when the domain of server is different from the requested domain.
Event with a difference of “www” in URL.
![CORS restriction](https://github.com/Vlad-UA/coding-challenge-frontend-react/blob/master/cors-limitations.png)
2. Add geo-coordinates into /v2/incidents. Or use GraphQL in order to have an ability set list required data in one request (to reduce consumption of server resources).
3. Add ability set ID of incident in /v2/location API.
4. Typo in the API documentation
![API typo](https://github.com/Vlad-UA/coding-challenge-frontend-react/blob/master/typo.png)
