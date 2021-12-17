// Here we get the elements by their id's
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const togglePassword = document.querySelector('#togglePassword');
const togglePassword2 = document.querySelector('#togglePassword2');
const close = document.getElementById('close');
const modal = document.getElementById('modal');

let inputUn = false;
let inputEm = false;
let inputPw1 = false;
let inputPw2 = false;

function checkInputs() {
    // Here we get the value of the inputs and use the .trim() function to remove white spaces that might be entered by the user
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === "") {  // Here it checks if the value of username is empty
        // Then we call the function showError
        showError(username, 'Username cant be blank');
    } else {
        showSuccess(username)
        inputUn = true;
    }

    if (emailValue === "") { // Here we check if the email input box is empty
        showError(email, "Email can't be blank");
    } else if (!checkEmail(emailValue)) { // Here we check if the email is not equal to the standard email format
        showError(email, 'Email is not valid');
    } else {
        showSuccess(email);
        inputEm = true;
    }

    if (passwordValue === "") {
        showError(password, "Password can't be blank")
    } else {
        showSuccess(password)
        inputPw1 = true;
    }

    if (password2Value === "") {
        showError(password2, "Password2 can't be blank")
    } else if(passwordValue !== password2Value) {
        showError(password2, "Passwords do not match")
    } else {
        showSuccess(password2);
        inputPw2 = true;
    }
    showModal();

}

function showError(input, message) {
    const formControl = input.parentElement; // the div with .form-control class
    const small = formControl.querySelector("small");
    // Here we add whatever will be the value of message inside the small tag
    small.innerText = message;
    // Here we add the error class
    formControl.className = "form-control error";
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function checkEmail(email) {
    // Here the value of return is the stardard format every valid email should follow or adhere to.
    // And we use the .test() function to check if the email matches the standard format.
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function showModal() {

    if (inputUn === true && inputEm === true && inputPw1 === true && inputPw2 === true) {
        modal.classList.add('show-modal');
        clearField();
    }
};

function clearField() {
    username.value = "";
    email.value = "";
    password.value = "";
    password2.value = "";
}

close.addEventListener('click', function() {
    modal.classList.remove('show-modal');
});


togglePassword.addEventListener('click', function (e) {
    e.preventDefault();

    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    // password.classList.toggle('bi-eye');
});

togglePassword2.addEventListener('click', function (e) {
    e.preventDefault();

    const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
    password2.setAttribute('type', type);

    // password2.classList.toggle('bi-eye');
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    checkInputs();
    clearField();
});



































// JSON.stringify()
// JSON.parse

// const users =  ['Tammy', 'Uche', 'Prof'];

// localStorage.setItem('name', JSON.stringify(users));
// const user = JSON.parse(localStorage.getItem('name'));
// console.log(user[2]);


// localStorage.setItem('fruit', 'apple');
// localStorage.setItem('name', 'Tammy');
// localStorage.clear();
// sessionStorage.setItem('fruit', 'apple');






// const form = document.getElementById('form');
// const user = document.getElementById('name');
// const password = document.getElementById('password');
// const submit = document.getElementById('submit');

// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     console.log(user.value);
//     console.log(password.value);
// })












// const input = document.getElementById("submit");

// function addItem() {
//     let input = document.getElementById("newItem");
//     if (input.value === "" || input.value === "  ") {
//         alert('Enter a value');
//         input.value = "";
//     } else {
//         let text = input.value;
//         let newLi = document.createElement("li");
//         newLi.textContent = text;
//         document.getElementById("items").appendChild(newLi);
//         input.value = "";
//     }   
// }

// input.addEventListener('mouseleave', addItem);





// const container = document.querySelector('.container');
// const btn = document.querySelector('.btn');
// const h1 = document.querySelector('.tomato')
// const mainDiv = document.createElement('div');
// const text = document.createTextNode('A dynamic Div');
// const nameInput = document.getElementById('name');
// h1.classList.add('deepskyblue');
// mainDiv.appendChild(text);
// document.body.prepend(mainDiv);

// Eventlistener using callBack function
// function changeColor() {
//     let hasClass = h1.classList.contains('deepskyblue');
//     if (hasClass) {
//         h1.classList.remove('deepskyblue');
//     } else {
//         h1.classList.add('deepskyblue')

//     }
// }
// btn.addEventListener('click', changeColor)// Has two parameters(what event, what to do)


// Some events in eventlistener
// 1. Click = fires after full action occurs
// 2. Mousedown = button is pressed
// 3. Mouseup = button is released
// 4. mouseenter = moved onto an element(like hover effect)
// 5. mouseleave = moved out of an element

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', function() {
//     console.log('You clicked me');
// });
// btn.addEventListener('mousedown', function() {
//     console.log('Down')
// });
// btn.addEventListener('mouseup', function() {
//     console.log('up')
// });
// btn.addEventListener('mouseenter', function() {
//     alert('Enter')
// });
// btn.addEventListener('mouseleave', function() {
//     console.log('Hello')
// });

// 1. keypress = when key is pressed
// 2. keydown = when key is down
// 3. keyup = when key is released

// const nameInput = document.getElementById('name');

// nameInput.addEventListener('keypress', function() {
//     console.log('You pressed a key');
// });
// nameInput.addEventListener('keydown', function() {
//     console.log('Down')
// });
// nameInput.addEventListener('keyup', function() {
//     console.log('up')
// });

// CSS - Styling elements through JS

// const heading = document.querySelector('.h2');

// heading.innerText = `Dynamic Heading`;
// heading.style.backgroundColor = 'blue';
// heading.style.color = 'blue';
// heading.style.fontSize = '3rem';
// heading.style.textTransform = 'capitalize';


// const text2 = document.createTextNode('Dynamic Heading'); // Creating a text content using dynamically
// heading.appendChild(text2); // Attaching the text content to an element using appendChild method
// heading.classList.add('deepskyblue'); // Addding a class or styling from your CSS file
// container.appendChild(heading); // Attaching the text content to an element using appendChild method



// const li = "List items"; // Creating a text content and storing it in a variable

// const ul = document.createElement('ul'); // Creating an element dynamically
// ul.innerHTML = // Creating an element specifying the element it will be inside of
//  `<li class="item">list item</li> 
//  <li class="item">list item</li> 
//  <li class="item">${li}</li>`; // Then we pass the variable here instead of hard coding the contents
// container.appendChild(ul);
















// const ul = document.getElementById('ul');
// ul.style.color = 'red'
// document.body.style.backgroundColor = 'black';
// document.querySelector('.container').style.backgroundColor = 'black';
// let li = document.getElementsByClassName('li');
// li[1].style.backgroundColor = 'green';
// let h1 = document.getElementsByClassName('container');
// h1[0].style.color = 'yellow'



// function num(one) {
//     // return one + 5;
//     console.log(5 + one);
// }
// num(2);


// function morning(name) {
//     return `Good morning ${name}`
// }
// function afternoon(name) {
//     return `Good afternoon ${name}`
// }

// function greet(name, me) {
   
//     const myName = 'Tammy';
//     console.log(me(name), + ' ' + "my mane is" + myName);
//     me();
// }

// greet('Uche', afternoon);
















// const globalNumber = 5;

// function outer(val1, val2) {
//     // const globalNumber = 50;
//     const result = val1 + val2 + globalNumber;
//     function multiply() {
//         // const globalNumber = 100;
//         const multiplyResult = result * globalNumber;
//         console.log(multiplyResult);
//     }
//     multiply();
//     return result;
// }

// console.log(outer(2, 3));







// Unary Operator
// let value = 10;
// console.log(typeof value)

// // Binary Operator
// let num = 1;
// let num2 = 3 + 5;

// // Tenary Operator
// value ? console.log('Value is true') :  console.log('Value is false');













// const value = 1 < 0;

// if (value) {
//     console.log('Value is true')
// } else {
//     console.log('Value is false')
// }


// for ( let i = 10; i >= 0; i--) {
//     console.log(`Despense ${i}`);
// }

// let amount = 15;

// do {
//     console.log('Despense' + ' ' + amount);
//     amount++;
// } while (amount < 10);




// let amount = 10;

// while(amount > 0) {
//     console.log('Depense cash' + amount );
//     amount--;
// }



// Objects is an entity with properties and type.
// Below is an example of a person object
// const person = {
//     name: "Tammy",
//     lastName: "Abraham",
//     age: 40,
//     education: true,
//     married: false,
//     siblings: ['James', 'Paul', 'Mary'],
//     greeting() {     // This is a method. A method is a function associated with an object(what object can do)
//         console.log('Hello Class');
//     }
// };

// console.log(person.greeting()); 
// console.log(person.siblings[1]); // This is how to access an object property with a dot notation


// Another Conditional statement which is used in comparison oparation
// It's prefared when comparing a long or lengthy condition
// const dice = 9;

//  switch(dice) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log('section 1');
//     break;
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//         console.log('section 2');
//     break;
//     case 11:
//     case 12:
//     case 13:
//     case 14:
//     case 15:
//         console.log('section 3');
//     break;
//     default:
//         console.log('None');
//  }





// Logical Operators
// (|| - OR), (&& - AND)

// || - OR
// let name = 'John';
// let age = 25;

// if(name === "John" || age === 25) { // This line of code evaluates the two variables
//     console.log("Welcome John");    // This line of code will run if either one of the above condition is correct
// } else{
//     console.log("Wrong User");
// }

// && - AND
// let name = 'John';
// let age = 25;

// if(name === "John" && age === 90) { // This line of code evaluates the two variables
//     console.log("Welcome John");    // This line of code will run only if the two above condition is correct
// } else{
//     console.log("Wrong User");
// }

































//  15/11/2021
// Function declaration

// function hello () {
//     window.alert('hello');
// }
// hello();
// toUpperCase();
// hello("Tammy");
// hello("Uche");

// let a = 45;
// let b = 20;

// if (a !== b) {
//     console.log(true)
// } else {
//     console.log(false)
// }



//  Function Expression
// let hello = function (num2) {
//     return num2 * 5;
// }
// console.log(hello(10));
// console.log(hello(20));

 


