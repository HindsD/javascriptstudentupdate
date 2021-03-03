$(document).ready(
    function(){
        $("button#addStudent").click(addStudent);
        $("button#nameSort").click(sortNameButton);
        $("button#percentageSort").click(sortPercentageButton);
        drawTable();
    }
);

let student = [
    {name:"", percentage:null}
];

function drawTable()
{

    let theTable = $("tbody");

    theTable.empty();

    const start = 0;
    const stop = student.length;
    for(let i = start; i < stop; i++)
    {
        let aStudent = student[i];

        let tableRow = $("<tr>");

        theTable.append(tableRow);

        let nameCell = $("<td>");
        tableRow.append(nameCell);
        nameCell.text(aStudent.name);

        let priceCell = $("<td>");
        tableRow.append(priceCell);
        priceCell.text(aStudent.percentage);
    }
}

function addStudent(event)
{
    event.preventDefault();
    let fname = $("input#fname").val();
    let lname = $("input#lname").val();
    let pointsE = parseFloat( $("input#pointsEarned").val() );

    let pointsP = parseFloat( $("input#pointsPossible").val() );
    let percentage = (pointsE / pointsP * 100).toFixed(2);


    let newStudent = {
        percentage: percentage // create object w/property
    };
    newStudent.name = (fname + " " + lname + " "); // add property to object

    student.push(newStudent);

    drawTable();
}

function sortByPercentage(a, b)
{
    if (a.percentage > b.percentage)
        return -1;
    else if (a.percentage < b.percentage)
        return 1;
    else
        return 0;
}

function sortByName(a, b){
        if(a.name < b.name)
            return -1;
        else if (a.name > b.name)
            return 1;
        else
            return 0;
}

function sortNameButton(){
    student.sort(sortByName);
    drawTable();
}

function sortPercentageButton(){
    student.sort(sortByPercentage);
    drawTable();
}




