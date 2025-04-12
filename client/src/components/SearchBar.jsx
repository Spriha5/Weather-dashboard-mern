import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const [inputCity, setInputCity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputCity.trim()) {
      onSearch(inputCity)
      setInputCity('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Enter city name"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar
