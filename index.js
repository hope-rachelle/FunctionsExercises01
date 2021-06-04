/* 4) Define a function with one parameter, which will be a string. The function must do the following:
a) Have a clear, descriptive name.*/
function lastThreeCharacters(str) {
for (let i = 0; i < str.length; i++) {
if (str[i].length <= 3) {
  console.log(str[i].slice(-3));
} else if (str[i].length > 3) {
  let template = str[i].slice(0, 3);
  console.log(`We put the ${template} in ${str[i]}`);
}}
}
lastThreeCharacters(["sunshine", "moonbeam", "sky", "nebula"]);
/*b) Retrieve only the last character from strings with lengths of 3 or less.
c) Retrieve only the first 3 characters from strings with lengths larger than 3. 
d) Use a template literal to return the phrase, "We put the '___' in '___'." Fill the first blank with the modified string, and fill the second blank
with the original string.
*/



/* Now test your function:
e) Outside of the function, define the variable str and initialize it with a string (e.g. 'Functions rock!').
*/
