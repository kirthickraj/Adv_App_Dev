import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import './Bookview.css'

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:8080/getdetails');
        setBooks(await response.json());
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <CircularProgress style={{ color: 'black', fontSize: '500cm', textAlign: 'center' }} />
      </div>
    );
  }

  return (
    <div>
      <div className="viewvenue">
        {books.map((book, index) => (
          <div key={index} className='view-container1'>
            <div className='desc'>
              <p>Id: {book.id}</p>
              <p>Male: {book.gender}</p>
              <p>Name: {book.name}</p>
              <p>phone: {book.phone}</p>
              <p>state: {book.state}</p>
              <p>10th percentage: {book.tenthpercentage}</p>
              <p>12th percentage: {book.twelvethpercentage}</p>
              <br />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
