let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    console.log("Opening tab:", tabname);

    // Retrieve the tab content element
    let tabContent = document.getElementById(tabname);

    // Ensure the tab content element exists
    if (!tabContent) {
        console.error("Tab content not found for tab name:", tabname);
        return;
    }

    // Remove active-link class from all tab links
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    // Remove active-tab class from all tab contents
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // Add active-tab class to the selected tab content
    tabContent.classList.add("active-tab");

    // Add active-link class to the clicked tab link
    event.currentTarget.classList.add("active-link");

    console.log("Tab content:", tabContent);
}
