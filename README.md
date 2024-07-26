# Stopwatch Application

This is a simple stopwatch application built using HTML, CSS, and JavaScript. It allows users to start, pause, reset the timer, and record lap times.

## Features

- **Start**: Starts the stopwatch.
- **Pause**: Pauses the stopwatch.
- **Reset**: Resets the stopwatch to zero.
- **Lap**: Records the current time as a lap.

## Usage

1. **Start**: Click the "Start" button to begin the stopwatch.
2. **Pause**: Click the "Pause" button to pause the stopwatch.
3. **Reset**: Click the "Reset" button to reset the stopwatch.
4. **Lap**: Click the "Lap" button to record the current time as a lap.

## Code Structure

The project consists of the following main components:

- **HTML**: The structure of the stopwatch and buttons.
- **CSS**: Basic styling for the stopwatch and buttons.
- **JavaScript**: The logic for the stopwatch functionality.

## JavaScript Logic

### Variables

- `startbtn`: Button to start the stopwatch.
- `pause`: Button to pause the stopwatch.
- `reset`: Button to reset the stopwatch.
- `lap`: Button to record a lap time.
- `hr`, `min`, `sec`, `cou`: Elements to display the hour, minute, second, and count respectively.
- `lapContainer`: Container to display recorded lap times.
- `hour`, `minute`, `second`, `count`: Variables to keep track of the time.
- `laps`: Array to store recorded lap times.
- `timer`: Boolean to keep track of the stopwatch state.

### Event Listeners

- `startbtn`: Starts the stopwatch and calls `stopwatchsection()`.
- `pause`: Pauses the stopwatch by setting `timer` to `false`.
- `reset`: Resets the stopwatch and clears lap times.
- `lap`: Records the current time as a lap when the stopwatch is running.

### Functions

- `stopwatchsection()`: Main function to update the time and display it. It calls itself every 10 milliseconds when the stopwatch is running.
- `formattime(time)`: Formats the time to always display two digits.
- `displaylaps()`: Updates the lap container with recorded lap times.
