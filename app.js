const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result");

buttons.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    const value = e.target.textContent;

    switch (value) {
      case "AC":
        result.textContent = "";
        break;
      case "DEL":
        result.textContent = result.textContent.substring(
          0,
          result.textContent.length - 1
        );
        break;
      case "%":
        if (
          result.textContent.includes("/") ||
          result.textContent.includes("*") ||
          result.textContent.includes("-") ||
          result.textContent.includes("+")
        ) {
          result.textContent = eval(result.textContent);
          result.textContent = result.textContent / 100;
        } else {
          result.textContent = result.textContent / 100;
        }
        break;
      case "=":
        result.textContent = eval(result.textContent);
        break;
      default:
        result.textContent += value;
        break;
    }
  })
);
