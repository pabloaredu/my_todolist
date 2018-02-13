// Create new object with the task
function newTask (title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function(){
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  }
  return task;
}

const task1 = newTask("Clean Cat Litter", "Take all the poop out of the litter box");
const task2 = newTask("Do Laundry", ":(");
const tasks = [task1, task2];


newTask("Clean Cat Litter"); // task 0
newTask("Do Laundry"); // task 1

task1.logState();
task1.markCompleted();
task1.logState();

