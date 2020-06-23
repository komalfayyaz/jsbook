// Chapter 21-25, task # 1

// Chapter 21-25, task # 2

// var a = prompt( "Please Enter Your Favorite Phone Model")
// var b = a.length
// alert("your favorite phone is: " + a + "\n" + "Lenght of String is: " + b)

// Chapter 21-25, task # 3

// var a = "Pakistan"
// var b = a.indexOf("n")
// document.write("Sting : " + a + "<br>" + "Index of 'N' : " + b)

// Chapter 21-25, task # 4


// Chapter 21-25, task # 5

// var a = "Pakistan"
// var b = a.charAt(3)
// document.write("Sting : " + a + "<br>" + "Character at index 3: " + b)

// Chapter 21-25, task # 6


// Chapter 21-25, task # 7

// var a = "Hyderabad"
// var b=a.replace(/Hyder/ , "Islam")
// document.write("City :" + a + "<br>" + "After Replacment: " + b)

// Chapter 21-25, task # 8

// var a = "Ali and Sami are best friends. They play cricket and football together and and and and"
// var b = a.replace(/and/g , "&")
// document.write(b)

// Chapter 21-25, task # 9

// var a = "472"
// var b = Math.floor(a)
// document.write("Value : " + a + "<br>" + "Type : String" + "<br>" + "Value : " + b + "<br>" + "Type : Number ")

// Chapter 21-25, task # 10

// var a = prompt( "Enter any name")
// var b = a.toUpperCase
// document.write(b)

// Chapter 21-25, task # 11

// excipe

// Chapter 21-25, task # 12

// var num = 35.36
// var a = num.toString()
// var b = a.split(".").join("")

// document.write("Number: " + num + "<br>" + "Result: " + b)

// Chapter 21-25, task # 14

// var item = prompt ("Welcome to ABC Bakery, \nWhats you wants to order")
// item = item.toLowerCase() , item.toUpperCase();
// var a = ["cake" , "Pasteris" , "browny"]
// for (var i=0 ; i < a.length ; i++){
//     if (a[i] === item ){
//         alert ("its available")
//     }
//     else{alert("not available")}

// }

// Chapter 21-25, task # 16

// var a = "university of karachi"
// var b = a.split("")
// var c = a.replace(/\,/g , " ")


// document.write(c)

// Chapter 21-25, task # 17


// Chapter 21-25, task # 18


// document.write(b)


// Chapter 26-30, task # 1

// var a = prompt("enter any number")
// var num = Number(a)
// alert (a)

// var a = prompt("enter any number")
// a = Math.round(a) 
// alert (a)


// var a = prompt("enter any number")
// a = Math.floor(a) 
// alert (a)

// var a = prompt("enter any number")
// a = Math.ceil(a) 
// alert (a)


// Chapter 26-30, task # 2

// Chapter 26-30, task # 3

// var a = prompt("enter any number")
// b = Math.abs(a)
// alert ("the absolute value of" + a + " is " + b) 

// Chapter 26-30, task # 4

// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// alert('You rolled a ' + diceRoll);

// // Chapter 26-30, task # 6
// var a = "Random Value of between 1 to 100: "
// var x = Math.floor((Math.random()*100)+1)
// alert (a + x)

// // Chapter 26-30, task # 8

// var a= prompt("enter a number between 1 and 10")
// for ( var i = 4  ; i == a ; i++){
// document.write ("match" + "<br>")
// }


// // Chapter 31-34, task # 1

// var a = new Date()
// document.write(a)

// // Chapter 31-34, task # 2

// var a= new Date() ;
// var b = a.toString() ;
// var c = b.slice(3,7) 

// alert ( "Current month is" + c)

// // Chapter 31-34, task # 3

// var a= new Date() ;
// var b = a.toString() ;
// var c = b.slice(0,4) 

// alert ( "Today is " + c)

// // Chapter 31-34, task # 4

// var  a = new Date()
// var b = a.getDay()
// if (b == 0 || b == 6){
//     alert ("its funday")
// } 
// else{
//     alert ("its workday")

// }

// // Chapter 31-34, task # 5

// var  a = new Date()
// var b = a.getDate()
// if (b   < 16 ){
//     alert ("first fifteen days of month")
// } 
// else{
//     alert ("last fifteen days of month")
 
// }

// // Chapter 31-34, task # 6

// var a = new Date()
// var b = a.getTime()
// var c = b / (1000*60*60) 
// document.write("Current Date " + a +'<br>' + "Elapsed Milliseconds since January 1, 1970: " + b + "<br>" + "Elapsed minutes since January 1, 1970: " + c )

// // Chapter 31-34, task # 7

// var a = new Date();
// var b = a.getHours()
// if (b   > 12 ){
//     alert ("Its PM")
// } 
// else{
//     alert ("Its AM")
// }

// // // Chapter 31-34, task # 8

// var laterDate = new Date("Dec 31, 2020")
// alert ( "Later Date : " + laterDate)


// // // Chapter 31-34, task # 9

// var a = new Date() ;
// var b = new Date("April 25, 2020")
// var c = a.getTime()
// var d = b.getTime()

// var e = c-d

// var f = e / (1000 * 60 * 60 *24)

// var g = Math.floor(f)

// alert(g + " Days have passed away since 1st Ramazan 2020")



// // // Chapter 31-34, task # 10

// var a = new Date();
// var b = new Date("June 20, 2020")
// var c = a.getTime();
// var d = b.getTime();
// var e = c-d
// var f = e / 1000
// var g = Math.round(f)

// document.write("On reference date " + a +"," + "<br>" + g + " seconds passed since June 20, 2020")

// // // Chapter 31-34, task # 11

// var a= new Date()
// var d = new Date();
// var pasthour = d.getHours() - 1;
// d.setHours(pasthour);
// document.write("current date : " + a + "<br>" + "1 hour ago, it was " + d);

// // // Chapter 31-34, task # 12

// var a = new Date();
// var d = new Date();
// var c = d.getFullYear() - 100;
// d.setFullYear(c);
// document.write("current date : " + a + "<br>" + "100 years ago, it was " + d);

// // // Chapter 31-34, task # 13

// var a = prompt("enter your age")
// var b = new Date()
// var c = b.getFullYear() - a;
// var d = Math.round(c)
// document.write("your age is " + a + "<br>" + "your birth year is " + d)

