let groupsBtn = document.getElementById('groupsBtn');
let injectGroups = document.getElementById('injectGroups');

let backBtn = document.getElementById('backBtn');

backBtn.addEventListener('click', function () {
    location.href = '../index.html';
})

GroupGenerator();
function GroupGenerator() {
    fetch('../data/data.json').then(response => response.json()).then(
        data => {
            const students = data;

            groupsBtn.addEventListener('click', function (e) {
                injectGroups.innerHTML = "";
                console.log(e.target.textContent);
                randomizeArray(students, e.target.textContent);
            })

            function randomizeArray(students, numGroups) {
                let randomStudentArray = [];
                while (randomStudentArray.length < students.length) {
                    let rndNum = Math.floor(Math.random() * students.length);
                    if (!randomStudentArray.includes(students[rndNum])) {
                        randomStudentArray.push(students[rndNum]);
                    }
                }
                console.log(randomStudentArray);
                generate(randomStudentArray, numGroups);
            }

            function generate(randomStudentArray, numGroups) {
                let counter = 0;
                let baseStudents = Math.floor(randomStudentArray.length / numGroups);
                let extra = randomStudentArray.length % numGroups;
                console.log(baseStudents);
                console.log(extra);

                for (let i = 0; i < numGroups; i++) {
                    let myTable = document.createElement('div');
                    myTable.className = "col myTable";

                    // head
                    let headerRow = document.createElement('div');
                    headerRow.className = "row";
                    let headerCol = document.createElement('div');
                    headerCol.className = "col";
                    let groupNumber = document.createElement('p');
                    groupNumber.style = "font-weight: bold";
                    groupNumber.textContent = `Group ${i+1}`;

                    headerCol.appendChild(groupNumber);
                    headerRow.appendChild(headerCol);
                    myTable.appendChild(headerRow);

                    // body
                    let baseStudentCounter = 0;
                    while(baseStudentCounter < baseStudents && randomStudentArray.length > 0){
                        let row = document.createElement('div');
                        row.className = "row";
                        let col = document.createElement('div');
                        col.className = "col";
                        let p = document.createElement('p');
                        p.textContent = randomStudentArray[0].name;
                        randomStudentArray.splice(0, 1);
                        
                        col.appendChild(p);
                        row.appendChild(col);
                        myTable.appendChild(row);
                        baseStudentCounter++;
                    }
                    
                    if (counter < extra) {
                        let row = document.createElement('div');
                        row.className = "row";
                        let col = document.createElement('div');
                        col.className = "col";
                        let p = document.createElement('p');
                        p.textContent = randomStudentArray[0].name;
                        randomStudentArray.splice(0, 1);
                        
                        col.appendChild(p);
                        row.appendChild(col);
                        myTable.appendChild(row);
                        counter++;
                    }
                    injectGroups.appendChild(myTable);
                }
            }

        })
}