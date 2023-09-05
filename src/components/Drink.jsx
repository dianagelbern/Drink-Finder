import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import useDrink from '../hooks/useDrink'

export default function Drink({drink}) {

    const {hanldeModalClick, handleDrinkIdClick} = useDrink()

  return (
    <Col md={6} lg={3}>
      <Card className='mb-4'>
          <Card.Img
            variant='top'
            src={drink.strDrinkThumb}
            alt={`Imagen de ${drink.strDrink}`}
          />

          <Card.Body>
              <Card.Title>{drink.strDrink}</Card.Title>

              <Button
                variant={'warning'}
                className="w-100 text-uppercase mt-2"
                onClick={() => {
                    hanldeModalClick(),
                    handleDrinkIdClick(drink.idDrink)
                }}
              >
                View Recipe
              </Button>
          </Card.Body>
      </Card>
    </Col>
  )
}
