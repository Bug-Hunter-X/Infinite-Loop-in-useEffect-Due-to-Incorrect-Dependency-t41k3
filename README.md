# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by incorrectly specifying the dependency array.

## The Bug

The `bug.js` file contains a component that attempts to increment a counter within the `useEffect` hook.  However, the dependency array `[count]` causes the effect to run every time the `count` changes, creating an infinite loop because `setCount` updates the `count` value, triggering the useEffect again.

## The Solution

The `bugSolution.js` file shows the corrected implementation.  The dependency array is removed, ensuring the effect runs only once after the component mounts (or when a specific dependency changes). If the effect needs to run on every render, use an empty array `[]`.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory in your terminal.
3. Run `npm install`.
4. Run `npm start`.
5. Observe the behavior in both files.