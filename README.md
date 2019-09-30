# Project Overview


## Project Description

DMB stands for Developers Mental Break where you come to for programming jokes, programming inspirational quotes, and get facts on random numbers.

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

## API Snippet

```
programming random jokes: https://official-joke-api.appspot.com/jokes/programming/random
programming random quotes: https://programming-quotes-api.herokuapp.com/quotes/random
Numbers random facts: http://numbersapi.com/4
```

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
-  The next button component should do another API CALL 
- Keep track of votes to display top votes

#### PostMVP EXAMPLE

- Share on social media platforms

## React Component Hierarchy

On the App.js file, I will have state define and have componets in side home component.
See images on top.

## Priority Matrix

Add in a picture of your Priority Matrix - See images on top. 

## Functional Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will render the Home | 
| Home | This will render the header and footer | 
| Home | This will render the the api calls page | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Preparation| H | 4hrs| 4hrs | 4hrs |
| API | H | 3hrs| 3hrs | 3hrs |
| Get data| H | 1hrs| 0hrs | 0hrs |
| Components| H | 3hrs| 0hrs | 0hrs |
| Router| H | 3hrs| 0hrs | 0hrs |
| Logic| H | 4hrs| 0hrs | 0hrs |
| Style| H | 3hrs| 0hrs | 0hrs |
| Share| L | 6hrs| 0hrs | 0hrs |
| Total | H | 25hrs| 0hrs | 0hrs |


## Additional Libraries

axios,
react router

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      check: '',
      check1: '',
      check2: ''
    }
    let check = axios.get('https://programming-quotes-api.herokuapp.com/quotes/random')
    console.log(check);
    let check1 = axios.get('http://numbersapi.com/4')
    console.log(check1);
    let check2 = axios.get('https://official-joke-api.appspot.com/jokes/random')
    console.log(check2);
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
