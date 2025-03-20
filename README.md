# JavaScript Calculator

A simple calculator built with vanilla JavaScript that supports basic arithmetic operations.

## Features

- Basic operations: addition, subtraction, multiplication, division
- Percentage calculation
- Positive/negative number toggle
- Decimal point support
- Division by zero error handling
- Clear functionality

## How to Use

1. Click number buttons (0-9) to input values
2. Click operation buttons (+, -, *, /) to select an operation
3. Click equals (=) to calculate the result
4. Additional functions:
   - `C` - Clear the calculator
   - `+/-` - Toggle between positive and negative numbers
   - `.` - Add a decimal point
   - `%` - Convert the current number to a percentage

## Implementation Details

The calculator uses a state-based approach with three main variables:
- `array`: Stores the operands for calculations
- `operator`: Stores the current operation (+, -, *, /)
- `num2Marker`: Tracks when the user is entering the second number

The implementation uses closures to create reusable event handlers for number and operator buttons, making the code more maintainable and DRY (Don't Repeat Yourself).

## Code Structure

- `numberHandler()`: Manages number button input and display updates
- `operatorHandler()`: Processes operations and maintains calculation state
- `opSelect()`: Performs the actual arithmetic operations using array reduction
- Event listeners for special functions (percent, decimal point, sign change, etc.)

## Future Improvements

- Add keyboard support for number and operation input
- Implement memory functions (M+, M-, MR, MC)
- Add calculation history display
- Improve UI with visual feedback for button presses
- Add scientific calculator functions

## Project Background

This calculator was built as a learning project to practice JavaScript fundamentals including:
- DOM manipulation
- Event handling
- Closures and higher-order functions
- State management
- Conditional logic

## License

[MIT License](https://opensource.org/licenses/MIT)

---

Created by [Your Name] as part of [The Odin Project](https://www.theodinproject.com/)
