export const mapApiKey = "https://www.google.com/maps/embed/v1/place?q=Ikorodu,+Lagos,+Nigeria&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"

export const validateEmail = (email: string) => {
  // Regular expression for a valid email address
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (!emailRegex.test(email)) {
    return false; // Check if the email matches the pattern
  }

  // Additional checks for common invalid email patterns
  if (email.includes('..') || email.includes('.@') || email.includes('@.') || email.includes('@-')) {
    return false;
  }

  const parts = email.split('@');
  if (parts.length !== 2) {
    return false; // An email should have only one "@" symbol
  }

  // Check the domain part for valid characters
  const domainRegex = /^[A-Za-z0-9.-]+$/;
  if (!domainRegex.test(parts[1])) {
    return false;
  }

  return true; // If all checks pass, the email is valid
};
