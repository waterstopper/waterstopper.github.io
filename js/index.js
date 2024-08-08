import { byClass, byId } from "./utils.js";

/*  */
let previewDict = await ((await fetch("resources/main/preview.json")).json())
let preview = byId("preview")


Array.from(byClass("hoverable")).forEach(element => {
    element.onmouseenter = () => {
        console.log(element.innerText)
        let previewValues = previewDict[element.innerText]
        if (previewValues != null) {
            showPreview(previewValues, element)
        }
    }
    element.onmouseleave = () => {
        hidePreview()
    }
});

function showPreview(previewValues, e) {
    let rect = e.getBoundingClientRect()

    preview.style.top = (rect.top - 100) + "px"
    preview.style.display = "block"

    if (previewValues.img != null) {
        preview.getElementsByTagName("img")[0].setAttribute("src", previewValues.img)
        preview.getElementsByTagName("img")[0].style.display = "block"
    } else {
        preview.getElementsByTagName("img")[0].setAttribute("src", "")
        preview.getElementsByTagName("img")[0].style.display = "none"
    }
    if (previewValues.title != null) {
        preview.getElementsByTagName("b")[0].innerText = previewValues.title
    } else {
        preview.getElementsByTagName("b")[0].innerText = ""
    }
    if (previewValues.description != null) {
        preview.getElementsByTagName("p")[0].innerText = previewValues.description
    } else {
        preview.getElementsByTagName("p")[0].innerText = ""
    }
}

function hidePreview() {
    preview.style.display = "none"
}