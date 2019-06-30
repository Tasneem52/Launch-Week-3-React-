You've been tasked with making a quiz application in React!

## Setup

From your challenges directory, run the following:
```
yarn install
yarn run start
```

If you go to [localhost:4567][localhost-4567], there will be nothing on the
page except "React Quiz!", and there should be no errors in your console.


**NOTE**: You are not expected to replicate the answer order shown in the wireframes below! That is, don't worry about reordering the answers so that `React` is first, `Ember` is second, etc. -- display them in whatever order is easiest.

1. Using React and the data supplied in `react/src/constants/data.js`, render a static page displaying the question and its possible answers. **You may not modify the data in `data.js`**.
   - On the initial render, the page should not display either 'Correct!' or 'Incorrect'
   ![React Quiz 1][react-quiz-1]
2. Clicking on a correct answer updates the page to display `Correct!` below the answers.
   ![React Quiz 2][react-quiz-2]
3. Clicking on an incorrect answer updates the page to display 'Incorrect' below the answers.
   ![React Quiz 3][react-quiz-3]
4. Once a button is selected, the button should change color. Check out `/public/home.css` to see if there are any provided classes to help you out!
