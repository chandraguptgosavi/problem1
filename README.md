# Problem1

## Tech Stack

Frontned: Reactjs with TypeScript

Styling: styled-components

## How to run locally?

After extracting zip:
- open problem1 folder in VS Code
- in VS Code terminal run following command
  

```bash
npm install
```
after successful installation of all packages
- run following command in VS Code terminal
```bash
npm start
```
you we'll see react app running in your browser successfully at `https://localhost:3000/`

## Src folder structure
```bash
.
├── app
│   └── types.ts
├── App.tsx
├── components
│   ├── Button.tsx
│   ├── Container.tsx
│   ├── DialogActionContainer.tsx
│   ├── DialogAction.tsx
│   ├── Dialog.tsx
│   ├── GridItem.tsx
│   ├── GridLayout.tsx
│   ├── GridRow.tsx
│   ├── Input.tsx
│   └── Text.tsx
├── index.tsx
├── pages
│   └── Home.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
└── setupTests.ts
```
Folder's description-
- app - contains global files/modules required for app
- components - contains react components 
- pages - contains main pages we see in browser when app is running

## Approach
- Initial approach while completing this task is to destructure the problem into smaller ones, so thinking and solving it becomes more easy and efficient.
- As react is used to complete this assignment, breaking the ui into smaller reusable components is the first approach taken by me.
- To make given grid layout, I have used `flexbox`. So, it becomes very easy to change the related column (text) according action performed in the first column. Using `flexbox` also makes responsiveness easier.
- Components and their purpose-
    - GridLayout (display:flex) -  it's a container for GridRows
    - GridRow (display:flex) -  it's a container for GridItems
    - GridItem (display:flex) -  it's a container for child items in grid, here text and input buttons are used as children
    - RowComponent -  it's wapper for each GridRow and contains it's own state so that mentioned action can be performed.
    - AppearenceController -  it's wapper for actions in first column of each row and contains buttons to trigger events accordingly.
