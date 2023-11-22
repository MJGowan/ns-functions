let injectStudentHere = document.getElementById('injectStudentHere');
let studentOne = document.getElementById('studentOne');
let studentTwo = document.getElementById('studentTwo');
let studentThree = document.getElementById('studentThree');
let studentFour = document.getElementById('studentFour');
let studentFive = document.getElementById('studentFive');
let rndBtn = document.getElementById('rndBtn');

let backBtn = document.getElementById('backBtn');

backBtn.addEventListener('click', function(){
    location.href = '../index.html';
})

NameGenerator();
function NameGenerator() {
    fetch('../data/data.json').then(response => response.json()).then(
        data => {
            const students = data;
            console.log(students);

            rndBtn.addEventListener('click', function(){
                generate();
            })

            function generate(){
                let rndNum = Math.floor(Math.random() * students.length);
                let chosenStudent = students[rndNum].name;
                fivePrevious(chosenStudent);
            }

            function fivePrevious(chosenStudent){
                if(studentFour.innerText != ""){
                    studentFive.innerText = studentFour.innerText;
                }
                if(studentThree.innerText != ""){
                    studentFour.innerText = studentThree.innerText;
                }
                if(studentTwo.innerText != ""){
                    studentThree.innerText = studentTwo.innerText;
                }
                if(studentOne.innerText != ""){ 
                    studentTwo.innerText = studentOne.innerText;
                }
                    studentOne.innerText = chosenStudent;
                
                injectStudentHere.innerHTML = chosenStudent;
            }




        })
}