[![Netlify Status](https://api.netlify.com/api/v1/badges/d4c3f20a-11aa-4762-bbe1-e2f956352726/deploy-status)](https://app.netlify.com/sites/mystifying-newton-1d6269/deploys)

## Introduction
A simple one-page app for tracking your daily mood, based off the design reference.

## Live link

[https://feeling-tracker.netlify.app/](https://feeling-tracker.netlify.app/)


## Technical side
- Bootstraped with CRA

- Styling with styled-components

- Virtualization with react-window

- Animation with react-spring

## Design & Functionality

- [x] Allow user to choose 1-5 rating for their day

- [x] The custom 1-5 input affects multiple components, refer to the designs

- [x] Allow user to enter and save a short message about why they felt that way today

- [x] When the user saves the card, the list item should update with the rating and truncated message summary

- [x] Saving the card replaces the save button with a saved timestamp

- [x] User can select a day to view and edit past entries

- [x] User can scroll horizontally without pagination for the current year (2020), starting at the current day

- [x] When user hovers over list items, the opacity of each list item is increased

- [x] Month at the bottom should update as the user scrolls in time

## Bonus Points

- [x] Save data via local storage

- [x] Add hover/focus states to the buttons

- [ ] Add transitions for the card and list items on page load

- [ ] Add transitions when switching between cards
      
      The whole background graident is faded in and out when status switches

- [x] Custom horizontal scrollbar implementation

- [ ] Make this responsive
  - [x] Support tablet mode
  - [ ] Support mobile mode
      

- [x] Whatever you think might make this better
  - [x] Virtualized list

       There are about 8 ~ 10 items are added to the DOM and rendered. This gives better UX and fast scroll speed.
  - [x] Accessbility through keyboard control
        
       :arrow_left: **Select Prev day**
       
       :arrow_right: **Select Next day**
       
       HOME key: **Select Today**
       
       END key: **Select Jan 01**

## Available Scripts

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
