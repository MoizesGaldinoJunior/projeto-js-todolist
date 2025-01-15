//Selecionando todos os elementos da lista

let form = document.querySelector('#form-group')
let taskInput = document.querySelector('#addList')
let taskList = document.querySelector('#taskList')
let spanTotal = document.querySelector('#spanTotal')
let spanMarc = document.querySelector('#spanMarc')
let spanRest = document.querySelector('#spanRest')

// Contadores
let totalTasks = 0
let completedTask = 0

//Função para atualizar os contadores
function updateCounters() {
    spanTotal.textContent = `Total: ${totalTasks}`
    spanMarc.textContent = `Marcados: ${completedTask}`
    spanRest.textContent = `Restante: ${totalTasks - completedTask}`
}

// Função para criar e adicionar um item na lista
function addTask(e) {
    e.preventDefault() //Evita o recarregamento da página

    const taskText = taskInput.value.trim()
    
    if (taskText === '') {
        taskInput.classList.add('.alert')
        return
    }
    
    totalTasks++
    
    //Criar elementos do item
    let li = document.createElement('li')
    let checkButton = document.createElement('button')
    let taskSpan = document.createElement('span')
    let deleteButton = document.createElement('button')
    
    //Configurar elementos
    checkButton.innerHTML = '<img src="assets/checkbo.svg" alt="Check">'
    checkButton.classList.add('BoxCheck')
    taskSpan.textContent = taskText
    deleteButton.innerHTML = '<img src="assets/add_circle.svg" alt="Remover">'
    deleteButton.classList.add('btnRemove')
    
    //Eventos
    checkButton.addEventListener('click', () => {
        taskSpan.classList.toggle('checked')
        if (taskSpan.classList.contains('checked')) {
            completedTask++
        } else {
            completedTask--
        }
        updateCounters()
    })
    
    deleteButton.addEventListener('click', () => {
        li.remove()
        totalTasks--
        if (taskSpan.classList.contains('checked')) {
            completedTask--
        }
        
        updateCounters()
    })
    
    //Montar o item e adicionar à lista
    li.appendChild(checkButton)
    li.appendChild(taskSpan)
    li.appendChild(deleteButton)
    taskList.appendChild(li)
    
    //Limpar o input e atualizar contadores
    taskInput.value = ''
    updateCounters()
    
}

//Evento de envio do formulário
form.addEventListener('submit', addTask)

//Atualizar os contadores
updateCounters()