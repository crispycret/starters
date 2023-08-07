# Starters

### Description:

A monorepo that contains a series of kickstarter projects for various frameworks such as `ReactJS`, `Next.js`, `Express.js`, `Flask`, `Django`, `Angular` that can be used to Mix-n-Match a tech-stack so you can focus on solving problems that matter. 

While not all of these frameworks have been added, the goal of this project is to have an array of powerful `frameworks` ready to ship out of the box that can interact with each other, where needed, to create a number of powerful tech-stacks.


## How To Use:

 In this section we will go over how to use these starter projects to build a `full-stack` application. First, determine what kind of tech-stack will solve your problem. 
 
 
 ### Project:
 
 Lets say we want a Developer Portfolio website that has a features such as a Personal Blog, Github Integration (recent repos, commits, favorited repos, followers, etc), and an Admin dashboard that can manage the portfolio content, github integration rules, and provide blog management.


 ### Tech Stack:
 
 To solve this problem we can use `Next.js` for our portfolio forntend to allow `SSR` to enhance `SEO` and application performance.
 Next, we can `ReactJS` for the Admin Dashboard. `Flask` we can use for our backend. And `PostgreSQL` we can use for the database.

 | Frontend - Client | Frontend - Admin Dashboard | Backend     | Database    |   
 | :---:             | :---:                      | :---:       | :---:
 | Next.js           | ReactJS                    | Flask       | PostgreSQL  |
 
 The reasoning behind seperating the client and admin dashboard is for security and practicallity. We may do extensive, reiterating development for the Admin Dashboard that creates a higher chance of breaking and slowing down the frontend client. We also don't need `Next.js` for our Admin Dashboard as we will use a standard `backend` approach but with the cost of having more projects to maintain, develop, and deploy. 


 ### Development:

 Because each of these starter frameworks were designed to work with each other, there is little to do in terms of configuration. All that is needed is to import the frameworks we want, connect them together and run each one (develop a `cli` to create/run/build/test all frameworks at the same time).





## Frameworks

| Frontends   | Backends    | Databases   |   
| :---:       | :---:       | :---:       |
| Next.js     | Express     | MongoDB     |
| ReactJS     | Flask       | PostgreSQL  |
| Angular     | Django      | MySQL       |
| Vue         |             |             |
| Django      |             |             |



## Tech Stacks 

| Frontend    | Backend     | Database    |   
| :---:       | :---:       | :---:       |
| Next.js     | Express     | MongoDB     |
| Next.js     | Flask       | MongoDB     |
| Next.js     | Flask       | PostgreSQL  |
| ReactJS     | Express     | MongoDB     |
| ReactJS     | Flask       | MongoDB     |
| ReactJS     | Flask       | PostgreSQL  |
