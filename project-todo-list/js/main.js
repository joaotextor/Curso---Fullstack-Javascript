const Main = {
    init: function() {
        this.cacheSelectors()
        this.bindEvents()
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
            button.onclick = self.Events.checkButton_click //! Here, "this" would referr to "Window", there's why we use the previosly assigned "self".
        })
        

        this.$inputTask.onkeypress = self.Events.inputTask_keypress.bind(this) //! ".bind(this)" makes the "this" from this event bound to the event "inputTask_keypress", so the "this" from this event can be called on the event "inputTask_keypress"

        this.$removeButtons.forEach(function(button) {
            button.onclick = self.Events.removeButton_click
        })
    },

    Events: {

        //~ Declare the functions to each event.
        checkButton_click: function(e) {
            //* console.log(e) to discover the attributes that comes with the onclick event 
            const li = e.target.parentElement
            const isDone = li.classList.contains('done')

            //BP: Is a best practice to check the negation (!) first, and then use "return" to stop the function (even if the function does not expect a value returned)
            //BP: The 'else' requires more processing power. In big projects this makes a difference.
            if (!isDone) { 
                li.classList.add("done")
                return
            }
            
            li.classList.remove("done")//* this line will only be executed if return didn't fire (in other words, if isDone is true.)
        },

        inputTask_keypress: function(e) {
            //* console.log(e) to discover the attributes that comes with the keypress event 
            const key = e.key
            const value = e.target.value

            if (key === "Enter") {
                this.$list.innerHTML += `
                    <li>
                        <div class="check"></div>
                        <label class="task">
                            ${value}
                        </label>
                        <button class="remove"></button>
                    </li>
                `
                //~ Now we clean the input
                e.target.value = ''
                //~ And cache again the html elements that was just recreated.
                this.cacheSelectors()
                this.bindEvents()
            }
        },

        removeButton_click: function(e) {
            let li = e.target.parentElement
            li.classList.add("removed") //*add a style that has an animation that lasts 200ms
            
            setTimeout(function() {
                li.classList.add("hidden") //*add a style (display: none) in 200ms
            }, 200)
        }
    }
}

Main.init() //*initialize