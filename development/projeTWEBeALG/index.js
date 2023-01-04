let button = document.getElementById("id")
let list = document.getElementById("list")


button.addEventListener("click", function () {
    if (list.style.display = "none") {
        list.style.display = "block"
    } else {
        list.style.removeProperty = "block" //nao le o block
    }
}
)