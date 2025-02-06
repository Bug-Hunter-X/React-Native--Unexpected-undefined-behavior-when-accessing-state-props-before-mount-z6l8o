# React Native: Unexpected 'undefined' when Accessing State/Props Before Mount

This repository demonstrates a common error in React Native applications: attempting to access component state or props before the component has fully mounted.  This often leads to unexpected `undefined` errors and application crashes.

## Problem

The `bug.js` file contains a React Native component that fetches data asynchronously.  It tries to render the fetched data in the `render()` method before the `componentDidMount()` lifecycle method (where the data is fetched) has completed.  This causes the application to throw an error because `this.state.data` is `undefined` initially.

## Solution

The `bugSolution.js` file provides a solution using conditional rendering.  It checks if `this.state.data` is available before trying to render the data.  This prevents the error by only rendering the data after it's been fetched successfully.

## How to Reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npx react-native run-android` or `npx react-native run-ios` to run the app in your emulator or device.
5. Observe the error in the `bug.js` version.  Then, see the corrected behavior in `bugSolution.js`.