# Stolen Bike Index - JOIN Coding Challenge - Frontend (React)

##App website 
https://vlad-ua.github.io/coding-challenge-frontend-react/

##Features and technical stack
1. React
2. Tests: Jest + Enzyme
3. ESLint -- all errors and warnings solved.
4. CSSinJS (styled-components).
5. When visitor come to the Case Page from list, there is no additional request to /v2/incidents/{id}.
6. When visitor come directly to the Details Page then app will make 2 requests: first to /v2/incidents/{id} to get main data for Incident and second to get data for a geo location.
7. In Search block added additional check: "To" must be greater than date "From".
8. For usability added scrolling to top of page on opening new page of incidents.
9. For Case Page added Google Map with position of incident.

## Recommendation for API improvements (based on the test task):
1. Add value of Total incidents into JSON or change CORS restrictions. 
At this moment the value located in the header of response. 
Due to CORS restriction is not possibly get list of all values from the response header when domain of server is different from the request domain.
Event with difference of “www” in URL.
2. Add geo coordinates into /v2/incidents. Or use GraphQL in order to have ability set list required data in one request (to reduce consumption of server resources).
3. Add ability set ID of incident in /v2/location API.
4. Typo in the API documentation.
