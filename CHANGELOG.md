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
