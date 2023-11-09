package main

import (
	"github.com/gin-gonic/gin"
	"github.com/joro550/go-todo/data"
	"github.com/joro550/go-todo/todo"
)

func main() {
	data.Connect()

	r := gin.Default()
	r.Use(CORSMiddleware())

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	r.GET("/todo", todo.GetTodos)
	r.GET("/todo/completed", todo.GetCompletdTodo)
	r.GET("/todo/in-progress", todo.GetInProgressTodo)

	r.POST("/todo", todo.CreateTodo)
	r.POST("/todo/complete/:id", todo.CompleteTodo)
	r.POST("/todo/complete")

	r.Run(":8080")
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
