# @olta/js-sdk

## 0.1.0

### Feature Changes

- Added delete functionality (deleteDoc), that sends a postmessage to delete document by ID.
- Changed Initial State of examples to include canEvolve and evolve, in order to make contracts deployed upgradable. Also added delete permissions to let only admin (creator) delete docs.

## 0.2.0

### Feature Changes

- Added feature to retrieve the active wallet address from the project state.

## 0.2.1

### Fixes

- Added feature to olta.module.js as well

## 0.3.0

### Feature Changes

- Updated rectangles project to include an example of a loading feature for artworks.
  This loading feature actually prevents the users from interacting over and over, putting a timer limit
  that can be customized, so they have to wait until the timer finishes.
- Included is also a message functionality that displays a message for the user interacting.
  The first interaction will display a default message instructing the user to sign-in, and the next ones
  will get a random message from the messages array each time. Feel free to add in your own custom messages!

## 0.3.1

### Fixes

- Fixed messages panel (for user interaction) position, which was being overlayed by embed's footer

## 0.3.2

### Fixes

- Fixed messages panel spinner and width of panel

## 0.3.3

### Feature Changes

- Adding playback function to the rectangles example

## 0.3.4

### Fixes

- Fixed time for playback function and added portrait/landscape styles on rectangles project
- Removed extra files

## 0.3.5

### Feature Changes

- Adding new function that list documents by user wallet

## 0.3.6

### Fixes

- Add play, pause and stop button in rectangles example

## 0.3.7

### Fixes

- Fix interactions in the rectangles example

## 0.3.8

### Fixes

- Add touch and click event listeners in rectangles

## 0.3.10

### Fixes

- Remove event listener from rectangles

## 0.3.11

### Fixes

- Change rectangles playback interval to 1 second

## 0.3.12

### Fixes

- Highlight user interactions in rectangles