const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;
const urlRegex =
  /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;
const ShippingZipCodeRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;
const billingZipCodeRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;
const zipCodeRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;


const instagramUsernameRegex = /^@(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
const onlyNumbersRegex = /^\d+$/;
const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const isValid = (
  value: string,
  rules: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    email?: boolean;
    password?: boolean;
    numeric?: boolean;
    url?: boolean;
    instagramUsername?: boolean;
    phoneNumber?: boolean;
    shippingZipCode?: boolean;
    billingZipCode?: boolean;
    zipCode?:boolean;

  }
) => {
  const errors: string[] = [];

  if (!rules) return errors;
  if (rules.required && !value.trim()) errors.push("Value is required");
  if (rules.minLength && value.length < rules.minLength)
    errors.push(`Minimum length required is ${rules.minLength}`);
  if (rules.maxLength && value.length > rules.maxLength)
    errors.push(`Maximum length required is ${rules.maxLength}`);
  if (rules.email && !emailRegex.test(value))
    errors.push("Please enter valid email !");
  if (rules.phoneNumber && !phoneRegex.test(value))
    errors.push("Invalid phone number !");
  if (rules.url && !urlRegex.test(value))
    errors.push("Invalid Url (e.g: http://www.facebook.com)");
    if (rules.zipCode && !zipCodeRegex.test(value))
    errors.push("Invalid  Zip Code");
    if (rules.shippingZipCode && !ShippingZipCodeRegex.test(value))
    errors.push("Invalid Shipping Zip Code");
    if (rules.billingZipCode && !billingZipCodeRegex.test(value))
    errors.push("Invalid Billing Zip Code");
  if (rules.instagramUsername && !instagramUsernameRegex.test(value))
    errors.push("Invalid Username (e.g: @instagram)");
  if (rules.numeric && !onlyNumbersRegex.test(value))
    errors.push("Only numeric input is allowed!");
  if (rules.password && !passwordRegex.test(value))
    errors.push(
      "Password must contain at least eight characters, one letter, one special character and one number"
    );

  return errors;
};
