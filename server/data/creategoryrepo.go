package data

type CategoryRepository struct{}

func (r CategoryRepository) GetCategories() ([]Category, error) {
	var category []Category
	database.Find(&category)
	return category, nil
}

func (r CategoryRepository) CreateCategory(model Category) error {
	database.Create(&model)
	return nil
}
