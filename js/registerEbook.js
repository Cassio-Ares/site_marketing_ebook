window.addEventListener("load", () => {
  document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.querySelector("input[name=email]").value;

    if (email.indexOf("@gmail.com") || email.indexOf("@outlook.com") === -1) {
        //  alert("error");
    } else {
    }

    const tel = document.querySelector("input[name=tel]").value;

    const regex = new RegExp("([(]?\d{2,3}[)]?)?([-]?[\s])?[0-9]") // ([(]?\d{2,3}[)]?[ -]?\d{4,5}[-\s]?\d{4})

    if(!regex.test(tel) && tel.replace("/\D\g","").length != 11) {
         alert("error");
    }

  });
});
