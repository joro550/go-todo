package data

type ToDo struct {
	Id          uint `gorm:"primarykey"`
	Title       string
	Description string
	Completed   bool
}

type Category struct {
	Id   uint `gorm:"primarykey"`
	Name string
}
