const inquirer = require('inquirer');

const cp = require('child_process');


function displayList() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'selection',
                choices: ['About', 'Skills', 'Academics', 'Projects'],
            },
        ])
        .then(function (ans) {
            if (ans.selection == 'About') {
                console.log('Recent graduate with programming skills and dedication to learn more.')
                displayNext();
            }
            else if (ans.selection == 'Skills') {
                console.log('JavaScript', 'Node', 'React', 'HTML/CSS')
                displayNext();
            }
            else if (ans.selection == "Academics") {
                cp.execSync('Start chrome https://drive.google.com/file/d/1ORzvaHneYBPgP_yL3jVMEXD56WjY_C_z/view?usp=sharing')
                displayNext();
            }
         else if (ans.selection == "Projects") {
            cp.execSync('start chrome https://github.com/sarthak-42')
            displayNext();
        }

})
}
displayList()




function displayNext(){
    inquirer
  .prompt([
    {
           type : 'list',
           name : 'selection',
           choices : ['Go back' , 'exit']

    }
  ])
  .then(function(ans){
    if(ans.selection =='Go back'){
           displayList()
    }
    else if(ans.selection == "exit"){
           console.log('Resume closed')
    }
  })
}

