const fromText = document.querySelector(".from-area");
toText = document.querySelector(".to-area");
selectTag = document.querySelectorAll("select");
exchangeIcon = document.querySelector(".exchange");
translateBtn = document.querySelector(".button"),
    icons = document.querySelectorAll(".row i")


selectTag.forEach((tag, id) => {
    for (const country_code in countries) {
        let selected;

        if (id == 0 && country_code == "en-GB") {
            selected = "selected";

        } else if (id == 1 && country_code == "pt-PT") {
            selected = "selected"
        }

        let option = `<option value="${country_code}" ${selected}> ${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option); // adding options tag insite select tag 
    }
});


exchangeIcon.addEventListener("click", () => {
    // exchanging text area and select tag valuesƒ
    let tempText = fromText.value;
    tempLang = selectTag[0].value;
    fromText.value = toText.value;
    selectTag[0].value = selectTag[1].value;
    toText.value = tempText;
    selectTag[1].value = tempLang;
});


translateBtn.addEventListener("click", () => {
    let text = fromText.value;
    translateFrom = selectTag[0].value,
        translateTo = selectTag[1].value;
    //  console.log(text, translateFrom, translateTo);
    const apiUrl = `https://api.mymemory.translated.net/get?q=${text}!&langpair=${translateFrom}|${translateTo}`

    fetch(apiUrl).then(res => res.json()).then(data => {
        console.log(data)
        toText.value = data.responseData.translatedText;
    })

});


icons.forEach(icon => {
    icon.addEventListener("click", ({ target }) => {
        if (target.classList.contains("fa-copy")) {
            if (target.id == "from") {
                navigator.clipboard.writeText(fromText.value);
                //   console.log("from copy icon clicado");
            } else {
                navigator.clipboard.writeText(toText.value);
                //  console.log("to copy icon clicado");
            }
        } else {
            let utterance;
            if (target.id == "from") {
                utterance = new SpeechSynthesisUtterance(fromText.value);
                utterance.lang = selectTag[0].value;
                //    console.log("speak icon clicado");
            } else {
                utterance = new SpeechSynthesisUtterance(toText.value);
                utterance.lang = selectTag[1].value;
            }
            speechSynthesis.speak(utterance);
        }
    })
})



