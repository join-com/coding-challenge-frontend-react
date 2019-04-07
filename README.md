# Stolen Bike Index - JOIN Coding Challenge - Frontend (React)

## App website 
https://vlad-ua.github.io/coding-challenge-frontend-react/

## Features and technical stack
1. React
2. Tests: Jest + Enzyme
3. ESLint -- all errors and warnings solved.
4. CSSinJS (styled-components).
5. When visitor come to the Case Page from the list, there is no additional request to /v2/incidents/{id}.
6. When visitor come directly to the Details Page then App will make 2 requests: first to /v2/incidents/{id} to get main data for Incident and second to get data for a geolocation.
7. In Search block added an additional check: "To" must be greater than date "From".
8. For usability added scrolling to top of the page on opening a new page of incidents.
9. For the Case Page added Google Map with a position of an incident.

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
