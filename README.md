# Chess League Web

This project is the frontend for the Chess League application. It is built using Angular and interacts with a backend Java API to manage matches, participants, leagues, and champions.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Environment Configuration](#environment-configuration)
- [Deployment](#deployment)
- [Testing](#testing)

## Project Overview

This project provides a web-based interface for managing chess leagues. The frontend is developed in Angular and consumes RESTful APIs provided by the backend Java application.

## Features

- View a list of matches, participants, leagues, and champions.
- Add, update, and delete matches.
- Responsive design for both desktop and mobile devices.

## Installation

To get started with the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/chess-league-web.git
   cd chess-league-web

2. **Install dependencies: Make sure you have Node.js and npm installed:**
   ```bash
   npm install

## Running the Application

To run the Angular application locally:
    ```bash
    ng serve

## Project Structure
The project is organized as follows:

chess-league-web/
│
├── src/
│   ├── app/
│   │   ├── components/        # Contains Angular components
│   │   ├── services/          # Contains Angular services
│   │   ├── app-routing.module.ts
│   │   ├── app.module.ts
│   │   └── ...
│   ├── assets/                # Static assets (images, fonts, etc.)
│   ├── environments/          # Environment-specific configurations
│   └── ...
│
├── angular.json
├── package.json
├── README.md
└── ...

## API Integration
The Angular application communicates with the backend via RESTful APIs. Services have been created to interact with the following endpoints:

Matches: /api/v1/matches
Participants: /api/v1/participants
Leagues: /api/v1/leagues
Champions: /api/v1/champions

## Environment Configuration
The environment-specific configurations can be found in the src/environments directory. The API base URL is defined here:

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080'
};

7. **For production, modify the API base URL in environment.prod.ts**

## Deployment
To deploy the application, build it for production:
   
###### ng build --prod

The build artifacts will be stored in the dist/ directory. You can deploy this directory to any web server.

## Testing
To run unit tests for the application:
    
###### ng test

The tests are written using Jasmine and executed with Karma. Ensure that you write unit tests for each component and service.