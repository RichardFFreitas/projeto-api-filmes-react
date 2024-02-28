
![Logo](https://upload.wikimedia.org/wikipedia/commons/8/89/Tmdb.new.logo.svg)


# Films With React (TMDB API Consumer Project)

A Project to study API and the roots for future projects. 
This project is designed to consume the API provided by The Movie Database (TMDB). It fetches and processes data about movies, TV shows, and other related information.


## API Documentation 

#### Return all itens 

```http
  GET /api/items
```

| Parameter   | Type       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Mandatory**. The key of your API|

#### Return Itens

```http
  GET /api/items/${id}
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Mandatory**. The ID of the item you want |



