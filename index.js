$(function() {
  // stop the default form submission behavior
  $("#number-chooser").submit(event => {
    // stop previous results
    event.preventDefault();

    $(".js-results").empty();
    const num = parseInt(
      $(event.currentTarget)
        .find('input[name="number-choice"]')
        .val()
    );
    // store DOM elements for each number
    // send results section of our HTML
    const results = [];
    // for every number between 1 and `num`,
    for (let i = 1; i <= num; i++) {
      // if num % 3,5 create 'fizzbuzz'
      if (i % 15 === 0) {
        //push result to HTML
        results.push(
          $('<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>')
        );
      }
      // if only % by 5
      else if (i % 5 === 0) {
        //push to buzz
        results.push(
          $('<div class="fizz-buzz-item buzz"><span>buzz</span></div>')
        );
      }
      // if only % by 3
      else if (i % 3 === 0) {
        //push to fizz
        results.push(
          $('<div class="fizz-buzz-item fizz"><span>fizz</span></div>')
        );
      }
      // else show `num`
      else {
        //push to HTML
        results.push($(`<div class="fizz-buzz-item"><span>${i}</span></div>`));
      }
    }
    // send solution to DOM
    $(".js-results").append(results);
  });
});

// Create an event listener that listens for when a user submits a form indicating how high to count
// $(function() {
//   $(".js-form').submit(event => {
//     event.preventDefault();
//     const numberChoiceElement = $(event.currentTarget).find('#number-choice');
//     $(".js-display-number-Choice-text").text('')
//     })
//   }
// }
// This event should cause the program to create the FizzBuzz sequence up to the number requested by the user
// for each element in the FizzBuzz sequence, your code should instern an element into the .js-results div
