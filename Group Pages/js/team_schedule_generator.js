// This table generator is modular and will make a custom schedule for each team
//
// Add this to the end of the footer tag
// <script src="../js/team_schedule_generator.js"></script>
//
// Script will look for this
// <div id="schedule">ROC</div>
// and replace the element with a customized table based off the team abbreviation in the div
//
// Team names: ALB BUF CGY COL GA HFX LV NY PC PHI ROC SD SAS TOR VAN
function generateTable(teamName) {
    // Creates the various table elements to be populated
    const table = document.createElement("table");
    table.className = "table";
    const headerRow = table.insertRow();
    headerRow.innerHTML = "<th scope='col'>Game</th><th scope='col'>Week</th><th scope='col'>Date</th><th scope='col'>Day</th><th scope='col'>Away</th><th scope='col'>Home</th><th scope='col'>Local</th><th scope='col'>ET</th>";
    const tableBody = document.createElement("tbody");

    // Uses Papa Parse to get CSV data
    Papa.parse("../data/2022-23-NLL-Master-Schedule.csv", {
        download: true,
        header: true,
        delimiter: ",",
        complete: function(results) {
            // Loops through all the rows of the CSV
            for (let i = 0; i < results.data.length; i++) {
                const row = results.data[i];
                const awayTeam = row.AWAY;
                const homeTeam = row.HOME;

                // If a row contains our team name in either the away or home column, add it to the table
                if (awayTeam === teamName || homeTeam === teamName) {
                    const tableRow = tableBody.insertRow();
                    tableRow.innerHTML = `<th scope='row'>${row.GAME}</th>
                                          <td>${row.WEEK}</td>
                                          <td>${row.DATE}</td>
                                          <td>${row.DAY}</td>
                                          <td>${row.AWAY}</td>
                                          <td>${row.HOME}</td>
                                          <td>${row.LOCAL}</td>
                                          <td>${row.ET}</td>`;
                }
            }

            // Adds the table body to the table
            table.appendChild(tableBody);

            // Replaces the original div with our new table
            const scheduleDiv = document.getElementById("schedule");
            scheduleDiv.parentNode.replaceChild(table, scheduleDiv);
        }
    });
}

// Calls the function using the team name from inside the div
const teamName = document.getElementById("schedule").innerHTML;
generateTable(teamName);
