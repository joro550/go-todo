package todo

import "github.com/joro550/go-todo/data"

type ToDo struct {
	Id          uint   `json:"id"`
    Title string `json:"title"`
	Description string `json:"description"`
}

type CompleteToDo struct {
    Id uint `uri:"id" binding:"required"`
}

type CreateToDoRequest struct {
    Title string `json:"title"`
	Description string `json:"description"`
}

func mapToResponse(todo data.ToDo) ToDo {
    return ToDo{
        Id:          todo.Id,
        Title: todo.Title,
        Description: todo.Description,
    }
}

func mapTodoMapToResponse(todo []data.ToDo) []ToDo {
    var todos []ToDo
    for _, t := range todo {
        todos = append(todos, mapToResponse(t))
    }
    return todos
}

func mapCreateTodoRequestToDo(request CreateToDoRequest) data.ToDo {
    return data.ToDo{
        Title: request.Title,
        Description: request.Description,
    }
}
