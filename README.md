# Project Overview


## Project Description

DMB stands for Developers Mental Break where you come to for programming jokes, programming inspirational quotes, and get facts on random numbers.

## Wireframes

[Wireframes](https://git.generalassemb.ly/younhash/DMB/blob/master/developer-mb/project2-images/wireframe.jpeg)

## API Snippet

```
programming random quote:
{
    "_id": "5a6ce86f2af929789500e849",
    "en": "The proper use of comments is to compensate for our failure to express ourself in code.",
    "author": "Robert C. Martin"
}

programming random joke:
{
    "id": 354,
    "type": "general",
    "setup": "Why didn’t the skeleton cross the road?",
    "punchline": "Because he had no guts."
}

```

### MVP/PostMVP - 5min

- API calls
- The NEXT button for the next random api calls
- Votes button with local storage
- Number input for for random number facts
- Share buttons on social media


#### MVP EXAMPLE

- Render random joke from joke API
- Render random quote from quote API
- The Next button gets a new joke or quote.
- Use React Router to route to joke/quote components
- Responsive design, two views, mobile & desktop

#### PostMVP EXAMPLE

- Number input for for random number facts
- Share buttons on social media
- Votes button with local storage

## React Component Hierarchy

On the App.js file, I will have state define and have componets in side home component.

https://git.generalassemb.ly/younhash/DMB/blob/master/developer-mb/project2-images/component-hierarchy.jpeg

Changes to the IMAGE: APP => HOME => HEADER, NUMBERS, PROGRAMMING QUOTES, PROGRAMMING JOKES, FOOTER

## Priority Matrix

Add in a picture of your Priority Matrix .

https://git.generalassemb.ly/younhash/DMB/blob/master/developer-mb/project2-images/matrix.jpeg

## Functional Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will render the Home | 
| Home | This will render the header, footer, Quotes, jokes |
| Header | This will render the header with page title| 
| Footer | This will render the Footer with information about the page | 
| Quotes | This will render programming quotes on API calls |
| jokes | This will render the jokes from programming jokes API |
| next | This will render NEXT buttons for the next random api call |


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Preparation| H | 9hrs| 9hrs | 9hrs |
| API | H | 1hrs| 1hrs | 1hrs |
| Get data| H | 1hrs| 1hrs | 1hrs |
| Components| H | 3hrs| 0hrs | 0hrs |
| Router| H | 4hrs| 0hrs | 0hrs |
| Logic| H | 1hrs| 0hrs | 0hrs |
| Style| H | 3hrs| 0hrs | 0hrs |
| Share| L | 2hrs| 0hrs | 0hrs |
| Total | H | 25hrs| 0hrs | 0hrs |


## Additional Libraries

axios,
react router

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```

```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
