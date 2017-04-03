function Todo(todo) {
  this.task = todo;
}

$(document).ready(function() {
  $("form#todos").submit(function(event) {
    event.preventDefault();

    var inputtedTodo = $("input#new-todo").val();

    var newTodo = new Todo(inputtedTodo);

    $("#todo-list").append("<span class='whole-thing'><li><span class='todo'>" + newTodo.task + "</span></li>" + "<input type='checkbox' id='" + newTodo.task  + "' value='done'>" + "<label for='" + newTodo.task + "'>Done</label></span><span class='remove'>REMOVE</span>");

    $(".remove").click(function(event) {
      event.preventDefault();

      $(".whole-thing").remove();
      this.remove();
    })

  });
});
