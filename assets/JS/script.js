
var projectFormEl = $("#project-form");
var instructionsEl = $('<h2>'); 
var addProject = $("button");
var clock = $("#timer");

var projectInfo = [
    'Project Name',
    'Project Type',
    'Due Date',
    'Hourly Rate',
];


/* Part 3
1. Create a function that will accept the four input fields' data as arguments.

2. Create a table row (`<tr>`) element and save it to a variable.

3. Create a table detail (`<td>`) element for each of the table columns created in Task 1.

4. For printing the days to the due date, use Moment.js to calculate the difference between the due date and the current time in days. 

5. For printing the estimated total earned amount, assume that you work an eight-hour day. So multiply the hourly rate by 8 to get the daily rate, then multiply that value by how many days until the project is due to get the estimated total earned. 

6. Append all `<td>` elements to the table row created, then append the entire row to the `<tbody>` element on the page.

7. Don't forget to close the modal when done!
*/

function myFunction () {
    var x = document.createElement("TR");
    x.setAttribute("id", "myTr");
    document.getElementById().appendChild(x);

    var y = document.createElement("TD");
    var t = document.createTextNode("new cell");
    y.appendChild(t);
    document.getElementById("myTr").appendChild(y);
}

