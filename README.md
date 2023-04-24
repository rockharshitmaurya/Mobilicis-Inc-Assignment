# Mobilicis-Inc-Assignment

### Frontend and API URLs

- Backend Server URL : [https://mobilicis-inc-assignment.onrender.com/](https://mobilicis-inc-assignment.onrender.com)
- Frontend URL : [https://mobilicis-inc-assignment.netlify.app/](https://mobilicis-inc-assignment.netlify.app)

### Project Documentation: README file for Source Code, APIs, Hostname, and URLs :

### Overview 

In this project, I have created a `Node.js` application using the `Express` framework and `MongoDB` database, and connected it to a frontend application using `React` and `Material UI`. I started by creating a `data model` for MongoDB and imported the given sample data into the database. Then, I created efficient and `fast routes` for each problem statement given in the task. On the frontend side, I used Material UI with React to build a user interface consisting of a selector and a table to display the fetched data. `The server and frontend are hosted separately`, and the frontend makes API requests to fetch the data from the server. Overall, the project was executed with a professional approach, and the final product provides a user-friendly interface for fetching and displaying data from the database.


## API Routes: Overview and Implementation Details

This is the documentation for the Mobilicis-Inc-Assignment API. All API routes are relative to the base URL: `https://mobilicis-inc-assignment.onrender.com/`

Below are the available API routes:


#### Fetch Users with income lower than $5 USD and have a car of brand “BMW” or “Mercedes”

```
  GET /api/users/income-bmw-mercedes-lower-5usd
```

#### Fetch Male Users which have phone price greater than 10,000

```
  GET /api/users/male-phone-price-greater-10000
```

#### Fetch Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name

```
  GET /api/users/last-name-quote-email
```

#### Fetch Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit

```
  GET /api/users/car-email
```

#### Fetch the data of top 10 cities which have the highest number of users and their average income

```
  GET /api/users/top-10-cities
```




