const input = document.querySelector(".showNumber")

const btns = Array.from(document.querySelectorAll(".btn"));



btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {

        // console.log(e.target.innerText);
        // if (e.target.innerText) {
        //     let text = input.innerText;
        //     text += e.target.innerText;
        // }

        switch (e.target.innerText) {
            case "c":
                input.innerText = "";
                break;
            case "=":
                try {
                    input.innerText = eval(input.innerText);
                } catch {
                    input.innerText = "Error!"
                }
                break;
            default:
                input.innerText += e.target.innerText;
                break;
        }


    })
})




