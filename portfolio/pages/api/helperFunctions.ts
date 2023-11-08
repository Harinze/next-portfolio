export const mapApiKey = "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"

export const validateEmail = (email: string) => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (!emailRegex.test(email)) {
    return false;
  }

  if (email.includes('..') || email.includes('.@') || email.includes('@.') || email.includes('@-')) {
    return false;
  }

  const parts = email.split('@');
  if (parts.length !== 2) {
    return false; 
  }

  const domainRegex = /^[A-Za-z0-9.-]+$/;
  if (!domainRegex.test(parts[1])) {
    return false;
  }

  return true;
};
