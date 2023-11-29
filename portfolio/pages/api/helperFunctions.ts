export const mapApiKey = "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"

export const validateEmail:any = (email: string) => {
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

export const emailjsUser = "8Er8aJtt3Q5DM1IqH"
export const mail = "kingsleyibe66@gmail.com"
export const SERVICE_ID = "serviceid"
export const TEMPLATE = "template_kga9xdg"
