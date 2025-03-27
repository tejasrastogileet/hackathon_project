function generateRTI() {
    const query = document.getElementById("query").value.trim();
    const department = document.getElementById("department").value;

    if (query === "" || department === "") {
        alert("Please enter query and select department!");
        return;
    }

    // Basic abusive word checker
    if (query.includes("abuse") || query.includes("badword")) {
        alert("Abusive content detected! Please remove it.");
        return;
    }

    const rtiLetter = `
        To,<br>
        The Public Information Officer,<br>
        ${department},<br><br>
        Subject: Request for information under RTI Act, 2005<br><br>
        Respected Sir/Madam,<br><br>
        I, hereby, request you to provide the following information under the RTI Act:<br><br>
        "${query}"<br><br>
        Thank you.<br><br>
        Yours sincerely,<br>
        [Your Name]
    `;

    document.getElementById("output").innerHTML = rtiLetter;
}

// Download Letter
function downloadRTI() {
    const content = document.getElementById("output").innerText;
    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "RTI_Letter.txt";
    link.click();
}