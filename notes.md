# job-board
programmer job board

A thorough README.md file that contains the following:

    The project's name and description

    Your wireframes and user stories

    The technologies, APIs, and modules you used and a description of each

    A code snippet of a part of the app you're particularly proud of

    Any things you plan to fix or features you plan to add

    Instructions for downloading the code and running it on localhost

- get list from github pages url
- add a job post




# Table of Contents:

### 1. Project Description
### 2. Priority Matrix
#### - MVP
#### - Post-MVP
### 3. Wireframes
### 4. Database and Tables
### 5. Technologies
#### - APIs
#### - Modules
### 6. Pages
#### - Landing Page
#### - Login & Register
#### - Profile
### 7. Functionality: Index
#### - Job Listings
#### - Filters
#### - Favoriting Jobs
#### - Functionality: Login
#### - Username
#### - Password
### 8. Functionality: Registration
#### - Username
#### - Password and Password Repeat
#### - repeat_user
### 9. Functionality: Profile
#### - Bio
#### - Avatar
#### - Favorited Posts
### 10. Change Log
### 11. Issues and Resolutions




## Project Description

I've decided to create a job board that's built and designed for the programmer. If there's programming involved, then it'll show up.

This website will use APIs to generate listings from other sites. For a list of the APIs used, please scroll down.

Sleek seems to be in chic, and I feel that colorful vibrance has taken the backseat for cooler, sharper tones. What separates this job board from a lot of other ones is its eye-catching color. Not only will the site be pleasant to look at, but each job listing is color coded based on the primary language that's used. For instance, jobs that require Ruby are shaded as the name suggests, and Python jobs are color coded as green. It makes more sense when you look at it.

Secondly, the index of this site features an infinitely scrollable page. A problem I've had with job boards like Indeed and Glassdoor is that for every thirty-odd results or so, you have to click the "Next" button. While this might be seen as a minor complaint, for me it ruins the flow of the website experience. The only clicking that's done on this site is to preview a job listing or to click on the url to travel to its original site.


## Priority Matrix

**1. Important & urgent:**
- Seeing the job listings in detail
  - Job title, company, languages and frameworks, job description, url
- Clicking on a listing that expands or minimizes it
- The ability to favorite a listing
- href-ing to the original websites
- The index page, in general
  - HTML
- The filtering menus
  - Languages, frameworks, and type (full, part, internship, contract)

**2. Important but not urgent:**
- Color coding the job listings by language used
  - If multiple languages, then the _first one listed_ determines the color
- The ability to hide a listing
- Hamburger drop down menu to the user profile, registration, and login
- Clicking on 'Profile' without being logged in redirects to the login page
- The login page has a button that redirects to the registration page
- Remembering if a user has visited the site before
- Repeating your password on registration
- HTML for all pages except index

**3. Not important but urgent (how can something be not important but urgent?):**
- The profile, registration, and login pages
  - Auth & auth
- Other filtering options
  - Level (entry, mid, upper, etc) and company size (small, medium, large), date posted

**4. Not important and not urgent:**
- Footer content
  - Linked icons to my GitHub, Linkedin, Instagram, etc.



### MVP
A user will be able to:
  - Create an account
  - View jobs
  - Favorite jobs
  - Travel to original source of job listing

### POST MVP
- Ability to sort results in ascending/descending order
- Fine-tuning the CSS
- Ability to post jobs
- Register with Google account
- User will update account (PUT)

## Wireframes

## The database and tables
**Database name: job_board**

**Table 1: users**

``` sql

    CREATE TABLE users (

    id BIGSERIAL PRIMARY KEY,

    username VARCHAR(255) UNIQUE,

    password VARCHAR(255),

    favorites VARCHAR(255),

    email VARCHAR(255) UNIQUE,

    );

```    

**Table 2: jobs**
``` sql

    CREATE TABLE jobs (

    id BIGSERIAL PRIMARY KEY,

    created_at date NOT NULL,

    title VARCHAR(255) NOT NULL,

    type VARCHAR(255) NOT NULL,

    company VARCHAR(255) NOT NULL,

    company_url VARCHAR(255) NOT NULL,

    url VARCHAR(255) NOT NULL,

    languages VARCHAR(255) NOT NULL,

    frameworks VARCHAR(255) NOT NULL,

    lat INTEGER,

    lng INTEGER,

    experience_level VARCHAR(255) NOT NULL

    );

```

## Technologies
- Express
- pg-promise
- Embedded JavaScript
- nodemon
- debug
- Body Parser
- Method Override


### APIs
- Authentic Jobs
- The Muse
- GitHub


### Modules



## Pages

### Landing Page
- Links to: login, register, profile

### Login & Register
Login:
  - Links to: index

Register:
  - Links to: index

### Profile
  - Links to: index



## Functionality: Index
- GET
  - '/'

### Job Listings  


### Filters

### Favoriting Jobs



## Functionality: Login
- GET
  '/login'

### Username

### Password



## Functionality: Registration
- GET
  '/register'

### Username

### Password and Password Repeat

### repeat_user



## Functionality: Profile
- GET
  - '/profile'

### Bio

### Avatar

### Favorited Posts
- GET from index
- DELETE (remove) favorites




Priority Matrix: 1. Important & urgent  |  2. Important but not urgent  |  3. Not important but urgent  |  4. Not important and not urgent

| **Component | Priority | Estimated Time | Time Invested | Actual Time** |
| :---: | :---: | :---: | :---: | :---: |
| :---: | :---: | :---: | :---: | :---: |


## Change Log
/// Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
/// Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
