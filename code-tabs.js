function showTab(id, event) {
    document
        .querySelectorAll(".tab-button")
        .forEach((btn) => btn.classList.remove("active"));
    document
        .querySelectorAll(".tab-content")
        .forEach((tab) => tab.classList.remove("active"));
    document.getElementById(id).classList.add("active");
    event.currentTarget.classList.add("active");
}