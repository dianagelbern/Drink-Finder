import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import useCategory from "../hooks/useCategory";
import { useState } from "react";
import useDrink from "../hooks/useDrink";

export default function DrinkForm() {
  const [alert, setAlert] = useState('')
  const [search, setSeatch] = useState({
    name: "",
    category: "",
  });
  const { categories } = useCategory();
  const { getDrinks } = useDrink();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(Object.values(search).includes('')){
      setAlert("All fields are required")
      return
    }

    setAlert('')
    getDrinks(search)

  };
  return (
    <Form onSubmit={handleSubmit}>
      {alert && <Alert variant="danger" className="text-center">{alert}</Alert>}
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Drink Name</Form.Label>
            <Form.Control
              id="name"
              type="text"
              placeholder="Ex: Tequila, Vodka, ..."
              name="name"
              value={search.name}
              onChange={(e) =>
                setSeatch({
                  ...search,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="category">Category</Form.Label>
            <Form.Select
              id="category"
              name="category"
              value={search.category}
              onChange={(e) =>
                setSeatch({
                  ...search,
                  [e.target.name]: e.target.value,
                })
              }
            >
              <option>-- Select Category --</option>
              {categories.map((category) => (
                <option value={category.strCategory} key={category.strCategory}>
                  {category.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md={3}>
          <Button type="submit" variant="danger" className="text-uppercase w-100">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
