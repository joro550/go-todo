package todo

import (
	"github.com/gin-gonic/gin"
	"github.com/joro550/go-todo/data"
)

func GetInProgressTodo(ctx *gin.Context) {
    repository := &data.TodoRepository{}
    todos, err := repository.GetInProgress()

    if err != nil {
        ctx.JSON(500, gin.H{
            "error": err.Error(),
        })
        return
    }

    response := mapTodoMapToResponse(todos)
    ctx.JSON(200, gin.H{
        "data": response,
    })
}

func GetCompletdTodo(ctx *gin.Context) {
    repository := &data.TodoRepository{}
    todos, err := repository.GetCompleted()

    if err != nil {
        ctx.JSON(500, gin.H{
            "error": err.Error(),
        })
        return
    }

    response := mapTodoMapToResponse(todos)
    ctx.JSON(200, gin.H{
        "data": response,
    })
}


func GetTodos(ctx *gin.Context) {
    repository := &data.TodoRepository{}
    todos, err := repository.GetTodos()

    if err != nil {
        ctx.JSON(500, gin.H{
            "error": err.Error(),
        })
        return
    }

    response := mapTodoMapToResponse(todos)
    ctx.JSON(200, gin.H{
        "data": response,
    })
}

func CreateTodo(ctx *gin.Context) {
    repository := &data.TodoRepository{}
    var request CreateToDoRequest
    if err := ctx.ShouldBindJSON(&request); err != nil {
        ctx.JSON(400, gin.H{
            "error": err.Error(),
        })
        return
    }

    todo := mapCreateTodoRequestToDo(request)
    err := repository.CreateTodo(todo)

    if err != nil {
        ctx.JSON(500, gin.H{
            "error": err.Error(),
        })
        return
    }

    ctx.JSON(200, gin.H{
        "message": "todo created",
    })
}

func CompleteTodo(ctx *gin.Context) {
    repository := &data.TodoRepository{}

    var request CompleteToDo

    if err := ctx.ShouldBindUri(&request); err != nil {
        ctx.JSON(400, gin.H{
            "error": err.Error(),
        })
        return
    }

    err := repository.CompleteTodo(request.Id)
    if err != nil {
        ctx.JSON(500, gin.H{
            "error": err.Error(),
        })
        return
    }

    ctx.JSON(200, gin.H{
        "message": "todo completed",
    })
}
