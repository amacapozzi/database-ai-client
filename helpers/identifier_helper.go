package helpers

import (
	"fmt"

	"github.com/StackExchange/wmi"
)

type Win32_Processor struct {
	ProcessorId string
}

func GetIdentifierByQuery[T any](data T) ([]T, error) {
	var out []T

	query := wmi.CreateQuery(&out, "")
	err := wmi.Query(query, &out)

	fmt.Println(query)

	if err != nil {
		fmt.Println(err)
		return nil, err
	}

	fmt.Println(query)

	return out, nil

}
