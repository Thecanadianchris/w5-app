
var form = document.getElementById("transformer-form");
var resultPanel = document.getElementById("result-panel");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  var userText = document.getElementById("user-text").value.trim();
  var persona = document.getElementById("persona-select").value;

  if (!userText) {
    resultPanel.innerHTML = "<p>Please enter some text first.</p>";
    return;
  }

  resultPanel.innerHTML = "<p>Transforming your Text...</p>";

  try {
    const transformed = await transformText(userText, persona);
    resultPanel.innerHTML = `<p>${transformed}</p>`;
  } catch (error) {
    resultPanel.innerHTML = "<p>Something went wrong. Please try again.</p>";
    console.error(error);
  }
});

