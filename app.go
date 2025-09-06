package main

import (
	"context"
	"database-ai-client/services"
	"fmt"
)

// App struct
type App struct {
	ctx context.Context
	db  *services.DatabaseService
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{
		db: &services.DatabaseService{},
	}

}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) ConnectDatabase(databaseUrl string) error {
	return a.db.Connect(databaseUrl)

}

func (a *App) GetTables() ([]string, error) {
	return a.db.GetDatabaseTables()
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}
