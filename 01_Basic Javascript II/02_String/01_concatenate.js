var concatenatedStrings = "string 1 " + " string 2";
console.log('Simple concatenate:', concatenatedStrings);

var concatenatedStrings2 = "string 1 ";
  concatenatedStrings2 += "string 2 ";
  concatenatedStrings2 += "string 3";
console.log('Plus concatenate:', concatenatedStrings2);

var stringMultiline = "sentence 1 \
                        sentence2 \
                        sentence 3 \
                        sentence 4";
console.log('Multiline concatenate:', stringMultiline);

var firstPartString = "first part ";
var secondPartString = "second part";
console.log('Concatenated string:', firstPartString.concat(secondPartString));

var joinedStrings = ["sentence 1", "sentence 2", "sentence 3", "sentence 4"].join(" ");
console.log('Use array to concatenate:', joinedStrings);



