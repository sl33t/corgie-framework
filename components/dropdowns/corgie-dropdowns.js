const dropdowns = document.getElementsByClassName("dropdown");

let toggleDropdown = (dropdown) => {
    let dropdown_contents = dropdown.getElementsByClassName("dropdown_contents")[0];
    if (dropdown_contents.style.display === "flex"){
        dropdown_contents.style.display = "none";
    }
    else {
        dropdown_contents.style.display = "flex"
    }
};

for(let i = 0; i < dropdowns.length; i++) {
    let dropdown = dropdowns.item(i);
    dropdown.addEventListener("click", () => {
        toggleDropdown(dropdown);
    }, false);
}