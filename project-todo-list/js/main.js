const Main = {

    tasks: [],

    init: function() {
        this.cacheSelectors() //~ Cache HTML elements
        this.bindEvents() //~ Add events on HTML elements
        this.getStoraged() //~ Recover Local Storage values
        this.buildTasks() //~ Build the structure of tasks
    },

    cacheSelectors: function() {
        //BP: A variable with a '$' as the first character means it's a HTML variable.
        this.$checkButtons = document.querySelectorAll(".check")
        this.$inputTask = document.querySelector('#inputTask')
        this.$list = document.querySelector('#list')
        this.$removeButtons = document.querySelectorAll('.remove')
    },

    bindEvents: function() {
        const self = this //~ sign 'this' (Main) to self so it can be used inside other Functions (subfunctions of bindEvents function, since in their scope "this" wont be "Main" anymore.

        //~ Setting a loop to run over all the "check" buttons in HTML that are stored in the array $checkButtons.
        this.$checkButtons.forEach(function(button) {
            button.onclick = self.Events.checkButton_click.bind(self) //! Here, "this" would referr to "Window", there's why we use the previosly assigned "self".
        })
        

        this.$inputTask.onkeypress = self.Events.inputTask_keypress.bind(this) //! ".bind(this)" makes the "this" from this event bound to the event "inputTask_keypress", so the "this" from this event can be called on the event "inputTask_keypress"

        this.$removeButtons.forEach(function(button) {
            button.onclick = self.Events.removeButton_click.bind(self)
        })
    },

    getStoraged: function () {
        const tasks = localStorage.getItem('tasks')

        if (tasks) {
            this.tasks = JSON.parse(tasks) //~ Main.tasks (array declared on the scope of Main)
        } else {
            localStorage.setItem('tasks', JSON.stringify([]))
        }
    },

    getTaskHtml: function(task, isDone) {
        return `
        <li class="${isDone ? 'done' : ''}" data-task="${task}">
            <div class="check"></div>
            <label class="task">
                ${task} 
            </label>
            <button class="remove"></button>
        </li>
`
    },

    insertHTML: function(element, htmlString) {
        element.innerHTML += htmlString

        this.cacheSelectors()
        this.bindEvents()
    },

    buildTasks: function () {
        let html = ''
        this.tasks.forEach(item => {
            html += this.getTaskHtml(item.task, item.done)
        }) //~ .task is the key assigned in the JSON object
        
        this.insertHTML(this.$list, html)
    },

    Events: {

        //~ Declare the functions to each event.
        checkButton_click: function(e) {
            //* console.log(e) to discover the attributes that comes with the onclick event 
            const li = e.target.parentElement
            const value = li.dataset['task']
            const isDone = li.classList.contains('done')

            const newTasksState = this.tasks.map(item => {
                if (item.task === value) {
                    
                    item.done = !isDone
                }
                return item
            })

            localStorage.setItem('tasks', JSON.stringify(newTasksState))

            //BP: Is a best practice to check the negation (!) first, and then use "return" to stop the function (even if the function does not expect a value returned)
            //BP: The 'else' requires more processing power. In big projects this makes a difference.
            if (!isDone) { 
                return li.classList.add("done")
            }
            
            li.classList.remove("done")//* this line will only be executed if return didn't fire (in other words, if isDone is true.)
        },

        inputTask_keypress: function(e) {
            //* console.log(e) to discover the attributes that comes with the keypress event 
            const key = e.key
            const value = e.target.value
            const isDone = false

            if (key === "Enter") {
                const taskHTML = this.getTaskHtml(value, isDone)
                this.insertHTML(this.$list, taskHTML)
                //~ Now we clean the input
                e.target.value = ''
                //~ And cache again the html elements that was just recreated.

                const savedTasks = localStorage.getItem('tasks')
                const savedTasksObj = JSON.parse(savedTasks)

                const obj = [
                     //~ ... is the spread operator
                    ...savedTasksObj,  
                    { task: value, done: isDone},    
                                                   
                ]

                this.tasks = obj
                localStorage.setItem('tasks', JSON.stringify(obj))
            }
        },

        removeButton_click: function(e) {
            const li = e.target.parentElement
            const value = li.dataset['task']

            const newTasksState = this.tasks.filter(item => {
                return item.task !== value
            })

            localStorage.setItem('tasks', JSON.stringify(newTasksState))
            this.tasks = newTasksState

            li.classList.add("removed") //*add a style that has an animation that lasts 200ms
            
            setTimeout(function() {
                li.classList.add("hidden") //*add a style (display: none) in 200ms
            }, 200)

            
        }
    }
}

Main.init() //* initialize