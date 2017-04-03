function Todo(todo) {
  this.task = todo;
}

$(document).ready(function() {
  $("form#todos").submit(function(event) {
    event.preventDefault();

    var inputtedTodo = $("input#new-todo").val();

    var newTodo = new Todo(inputtedTodo);

    $("#todo-list").append("<div><input type='checkbox' name='task' value=' class='task'" + newTodo.task + "'>" + newTodo.task + "</div");

  });

  $("#remove").click(function() {
    event.preventDefault();
    $("input:checked").parent().remove();
    });
});
