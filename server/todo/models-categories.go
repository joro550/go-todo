package todo

import "github.com/joro550/go-todo/data"

type Category struct {
	Name string
	Id   uint
}

type CreateCategory struct {
	Name string
}

func maptoResponse(category data.Category) Category {
	return Category{
		Id:   category.Id,
		Name: category.Name,
	}
}

func mapCategoryMapToResponse(category []data.Category) []Category {
	var categories []Category
	for _, cat := range category {
		categories = append(categories, maptoResponse(cat))
	}
	return categories
}

func mapCategoryToEntity(category CreateCategory) data.Category {
	return data.Category{
		Name: category.Name,
	}
}
