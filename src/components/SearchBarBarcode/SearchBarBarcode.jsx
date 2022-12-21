import React, { useState } from 'react'
import {Col, Form, Button} from 'react-bootstrap'
import './SearchBarBarcode.css'
const SearchBarBarcode = ({filterSearch}) => {

  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    filterSearch(search)
  }

  return (
    <Col md={{ span: 4, offset: 4 }}>
    
    <Form className="alignBtn" onSubmit={handleSubmit}>
    <Form.Group className="mb-3">
      <input
        type="number"
        className="form-control"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
        placeholder="Kërko sipas barkodit"
      />
    </Form.Group>
    <Button className="conad-btn" type="submit">Kërko</Button>
    </Form>
    </Col>
  )
}

export default SearchBarBarcode