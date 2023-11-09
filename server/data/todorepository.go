package data

type TodoRepository struct {
}

func (r TodoRepository) GetTodos() ([]ToDo, error) {
	var todos []ToDo
	database.Find(&todos)
	return todos, nil
}

func (r TodoRepository) GetInProgress() ([]ToDo, error) {
	var result []ToDo

	database.Where("completed = ?", false).Find(&result)
	return result, nil
}

func (r TodoRepository) GetCompleted() ([]ToDo, error) {
	var result []ToDo

	database.Where("completed = ?", true).Find(&result)
	return result, nil
}

func (r TodoRepository) CompleteTodo(id uint) error {
	var result ToDo
	database.First(&result, id)

	database.Model(&result).Update("completed", true)

	return nil
}

func (r TodoRepository) CreateTodo(todo ToDo) error {
	database.Create(&todo)
	return nil
}
