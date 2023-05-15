//Reverse the content inside the array without changing the position
//Input --> My Name is Ashif
//Output --> yM emaN si fihsA

let reverseArray = (str) => {
  let convertToArray = str.split(" ");

  let reverseStr = convertToArray.map((arr) =>
    arr.split("").reverse().join("")
  );

  console.log(reverseStr.join(" "));
};

reverseArray("My Name is Ashif");
