{
  const form = document.querySelector(".enter__word");
  const cardContent = document.querySelector(".card__content");
  const cardBack = document.querySelector(".card__back");
  const resultBack = document.querySelector(".back__result");
  const startButton = document.querySelector(".start__button");
  const backButton = document.querySelector(".back__button");
  let isFrontCard = true;

  function clean(input) {
    return input.toLowerCase().replace(/\W/g, "");
  }

  function isPalindrome(event) {
    event.preventDefault();
    const input = document.querySelector("#form__input").value;
    const cleanInput = clean(input);
    const reverseInput = cleanInput.split("").reverse().join("");

    if (reverseInput === cleanInput) {
      cardBack.classList.add("display");
      resultBack.innerHTML = `Yes ${cleanInput} is a Palindrome!`;
    } else {
      cardBack.classList.add("display");
      resultBack.innerHTML = `No sorry, ${cleanInput} is not a Palindrome!`;
    }
    cardFlip();
    form.reset();
  }

  function cardFlip() {
    cardContent.classList.toggle("is-flipped");
  }

  form.addEventListener("submit", isPalindrome);
  backButton.addEventListener("click", cardFlip);
}
