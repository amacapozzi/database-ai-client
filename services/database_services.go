package services

import (
	"context"

	"github.com/jackc/pgx/v5"
)

type DatabaseService struct {
	conn *pgx.Conn
}

var QUERY_GET_ALL = "SELECT table_name FROM information_schema.tables WHERE table_schema='public' ORDER BY table_name"

func (ds *DatabaseService) Connect(databaseUrl string) error {
	conn, err := pgx.Connect(context.Background(), databaseUrl)

	if err != nil {
		return err
	}
	ds.conn = conn
	return nil
}

func (ds *DatabaseService) GetDatabaseTables() ([]string, error) {
	rows, err := ds.conn.Query(context.Background(), QUERY_GET_ALL)

	if err != nil {
		return nil, err
	}

	tablesName, err := pgx.CollectRows(rows, func(row pgx.CollectableRow) (string, error) {
		if err != nil {
			return "", err
		}
		var tablesName string
		row.Scan(&tablesName)
		return tablesName, nil

	})

	return tablesName, nil

}

func (ds *DatabaseService) Close() error {
	if ds.conn == nil {
		return nil
	}

	if err := ds.conn.Close(context.Background()); err != nil {
		return err
	}

	ds.conn = nil

	return nil

}
