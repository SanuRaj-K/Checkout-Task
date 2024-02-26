function active(radioId) {
  document.getElementById(radioId).checked = true;

  const element = document.getElementById("one");
  const elementTwo = document.getElementById("two");
  const elementthree = document.getElementById("three");

  if (radioId === "item1") {
    element.style.display = "";
  } else {
    element.style.display = "none";
  }
  if (radioId === "item2") {
    elementTwo.style.display = "";
  } else {
    elementTwo.style.display = "none";
  }
  if (radioId === "item3") {
    elementthree.style.display = "";
  } else {
    elementthree.style.display = "none";
  }
}
