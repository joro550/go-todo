package todo

import (
	"github.com/gin-gonic/gin"
	"github.com/joro550/go-todo/data"
)

func GetCategories(ctx *gin.Context) {
	repo := &data.CategoryRepository{}
	categories, err := repo.GetCategories()
	if err != nil {
		ctx.AbortWithStatus(500)
		return
	}

	response := mapCategoryMapToResponse(categories)
	ctx.JSON(200, gin.H{
		"data": response,
	})
}

func CreateCat(ctx *gin.Context) {
	repo := &data.CategoryRepository{}

	var request CreateCategory
	if err := ctx.ShouldBindJSON(&request); err != nil {
		ctx.JSON(400, gin.H{
			"error": err.Error(),
		})
		return
	}

	category := mapCategoryToEntity(request)
	_ = repo.CreateCategory(category)

	ctx.JSON(200, gin.H{
		"message": "category created",
	})
}
