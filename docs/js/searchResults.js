export const buildSearchResults = (resultArray) => {
    resultArray.forEach(result => {
        const resultItem = createREsultItem(result);
        const resultContents = document.createElement("div");
        resultContents.classList.add("resultContents");
        if (result.img) {
            const resultImage = createREsultImage(result);
            resultContents.append(resultImage);
        }
        const resultText = createResultText(result);
    })
}