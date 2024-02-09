let tag1 = document.querySelector(".tag1");

let tag2 = document.querySelector(".tag2");

let tag3 = document.querySelector(".tag3");

async function fetchQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function changeQuote() {
  try {
    const { author, content, tags } = await fetchQuote();

    document.querySelector(".card").classList.remove("hidden");

    document.querySelector("h2").innerHTML = author;

    tag1.innerHTML = tags[0] || "";
    tag1.classList.toggle("hidden", !tags[0]);

    tag2.innerHTML = tags[1] || "";
    tag2.classList.toggle("hidden", !tags[1]);

    tag3.innerHTML = tags[2] || "";
    tag3.classList.toggle("hidden", !tags[2]);

    document.querySelector("h1").innerHTML = `"${content}"`;
  } catch (error) {
    console.log(error);
  }
}

document.addEventListener("DOMContentLoaded", changeQuote);

function copyToClipboard() {
  const quote = document.querySelector("h1").innerHTML;
  navigator.clipboard.writeText(quote).then(() => {
    const copyMessage = document.querySelector("p");
    document.querySelector("h1").classList.add("bg-[#ffffff40]");
    copyMessage.classList.remove("hidden");

    setTimeout(() => {
      document.querySelector("h1").classList.remove("bg-[#ffffff40]");
      copyMessage.classList.add("hidden");
    }, 1000);
  });
}
