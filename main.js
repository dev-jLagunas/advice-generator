// Styles Import
import "./style.scss";

// DOM Elements
const adviceID = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice");
const diceBtn = document.querySelector(".dice-button");

//Event Listener
window.addEventListener("DOMContentLoaded", getQuote);
diceBtn.addEventListener("click", getQuote);

//Function
async function getQuote() {
  adviceText.textContent = "Finding advice for you...";
  adviceID.textContent = "???";

  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const adviceData = await response.json();

    adviceID.textContent = adviceData.slip.id;
    adviceText.textContent = `"${adviceData.slip.advice}"`;
  } catch (error) {
    console.error("Error:", error);
    adviceText.textContent = "An error occurred while fetching the quote.";
  }
}
