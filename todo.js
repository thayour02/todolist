 const todolist = [
        
]

    addtodolist();

    function addtodolist(){
            let addtodo = '';


        for(let i =0; i < todolist.length; i++){

            let todoobject = todolist[i];
            let {name,date} = todoobject

            let html =`
             <div class="name">${name}</div> 
             <div class="date">${date}</div> 

            <button class="delete" onclick="
            todolist.splice(${i}, 1)
            addtodolist();
            ">Delete</button>`

            addtodo += html
        }
        document.getElementById('addt').innerHTML = addtodo

        }
        console.log(addtodo)



    function add(){
        const todoinput = document.getElementById("todo")
        const dateinput = document.getElementById('date')

        let todo = todoinput.value
        let date = dateinput.value

        todolist.push({name:todo,
            date
            
        })

        console.log(todolist)

        todoinput.value = ''
        dateinput.value =''


        addtodolist();
    }