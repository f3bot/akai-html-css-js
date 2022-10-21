/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    AKAI Frontend Task - Javascript

    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.

    Powodzenia!
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
const form = document.getElementById('form')
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const errorDiv = document.getElementById('error')
const checkbox = document.querySelector('.checkbox')
const checkDiv = document.getElementById('checkdiv')

form.addEventListener('submit', (e) =>{
    let messagesinput = []
    let messagescheck = []
    if(firstName.value === '' || firstName.value == null){
        messagesinput.push("First name is required")
    }else if(lastName.value === '' || lastName.value == null){
        messagesinput.push("Last name is required")
    }else if(email.value === '' || email.value == null){
        messagesinput.push("Email is required")
    }

    if(messagesinput.length > 0){
        e.preventDefault()
        console.log(messagesinput)
        errorDiv.innerHTML = messagesinput;
    }

    if(checkbox.checked == false){
        messagescheck.push("Please select at least one category.")
    }

    if(messagescheck.length > 0){
        e.preventDefault()
        console.log(messagescheck)
        checkDiv.innerHTML = messagescheck;
    }
})

// 1. odwróć liczbę
// np dla 12345, funkcja powinna zwrócić 54321
/*
function reverseNumber(number) {
  let x = number.toString().split("");
  let xreversed = x.reverse().join("")
  return xreversed
}

console.log("1.", reverseNumber(12345));

// 2. doodaj do siebie wszystkie wartości z tablicy, które są parzyste
// dla tablicy tab powinniśmy otrzymać 2 + 4 + 6 + 8 = 20
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function addEven(array) {
  let sum = 0;
  for(let i = 0; i <= array.length; i++){
    if(tab[i] % 2 === 0){
      sum += tab[i]
    }
  }
  return sum
}

console.log("2.", addEven(tab));
*/
