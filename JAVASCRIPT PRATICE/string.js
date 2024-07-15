//Creation / Declaration
let s1 = "    G Anvesh     ";
let s2 = new String("Codegnan ");
console.log(s1);
console.log(s2);

//Accessing using Index
console.log(s1[4]);

//Length of the string
console.log(s1.length);

//Methods
console.log(s1.charAt(0));
console.log(s1.charCodeAt(0));
console.log(s1.concat(" Is ",s2," Trainer"));
console.log(s1.startsWith("G Anvesh"));
console.log(s1.endsWith("G Anvesh"));
console.log(s1.includes("i V"));
console.log(s1.toLowerCase());
console.log(s1.toUpperCase());
console.log(s1.indexOf("a"));
console.log(s1.lastIndexOf("a"));
console.log(s2.repeat(3));
console.log(s1.replace("Sai","T"));
console.log(s1.slice(4,11));
console.log(s1.split(" "));
console.log(s1.trim());