const regex = /^[0-9]*$/;

export function validateNumericInput(value) {
  // Test the input value against the numeric regex
  if (regex.test(value)) {
    return true; // Valid input
  } else {
    return false; // Invalid input
  }
}