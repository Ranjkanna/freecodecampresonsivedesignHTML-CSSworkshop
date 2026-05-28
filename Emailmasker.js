function maskEmail(email){
  const atIndex=email.indexOf("@");
  const username=email.slice(0,atIndex);
  const domain=email.slice(atIndex);
const firstChar=username.slice(0,1);
const lastChar=username.slice(-1);
const maskLength=username.length-2;
const maskedMiddle='*'.repeat(maskLength);
return firstChar + maskedMiddle + lastChar + domain;

}
const email = "apple.pie@example.com";
console.log(maskEmail(email));
