function searchDisease() {
    let searched_Disease = document.getElementById("search").value.toLowerCase();
    let disease_Info = document.getElementById(searched_Disease);
    let disease = document.getElementById("infodiv");
 

    if (disease_Info) {
        disease.innerHTML = disease_Info.innerHTML;
    } else {
        disease.innerHTML = "Disease information not currently available.";
    }
}
