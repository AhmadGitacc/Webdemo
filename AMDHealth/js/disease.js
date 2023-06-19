function searchDisease() {
    let searched_Disease = document.getElementById("search").value.toLowerCase().trim();
    let disease_Info = document.getElementById(searched_Disease);
    let disease = document.getElementById("infodiv");
    let suggestions = document.getElementById("suggestions");

    suggestions.innerHTML = "";

    if (disease_Info) {
        disease.innerHTML = disease_Info.innerHTML;
    } else {
        disease.innerHTML = "Disease information not currently available.";

        //search suggestions
        let searchSuggestions = generateSearchSuggestions(searched_Disease);
        displaySearchSuggestions(searchSuggestions);
    }
}


function generateSearchSuggestions(searchTerm) {
    // List of suggested disease names
    let suggestedDiseases = [
        "Covid19",
        "Flu",
        "Diabetes",
        "Hypertension",
        "Malaria",
        "Asthma",
        "Arthritis",
        "Depression",
        "Parkinsons",
        "COPD",
        "Tuberculosis",
        "Cholera",
        "Ebola",
        "Zika virus",
        "Lyme disease",
        "Hepatitis",
        "HeartDisease",
    ];

    // Filter suggested disease names based on the search term
    let filteredSuggestions = suggestedDiseases.filter((disease) =>
        disease.toLowerCase().startsWith(searchTerm)
    );

    return filteredSuggestions;
}

function displaySearchSuggestions(suggestions) {
    let suggestionsContainer = document.getElementById("suggestions");

    suggestionsContainer.innerHTML = "";

    suggestions.forEach((suggestion) => {
        let suggestionElement = document.createElement("div");
        suggestionElement.classList.add("suggestion");
        suggestionElement.textContent = suggestion;

        suggestionElement.addEventListener("click", () => {
            document.getElementById("search").value = suggestion;
            searchDisease();
        });

        suggestionsContainer.appendChild(suggestionElement);
    });
}

function showSearchSuggestions() {
    let searchTerm = document.getElementById("search").value.toLowerCase().trim();
    let searchSuggestions = generateSearchSuggestions(searchTerm);
    displaySearchSuggestions(searchSuggestions);
}
