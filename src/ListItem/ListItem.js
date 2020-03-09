import React from "react";
import "./ListItem.css";

export default function ListItem(props) {
  return (
    <div className='list-item'>
      <div className='image'>
        <img
          src={props.book.volumeInfo.imageLinks.smallThumbnail}
          className='book-cover'
        />
      </div>
      <div className='book-title'>
        <h2>{props.book.volumeInfo.title}</h2>
      </div>
      <div className='book-info'>
        <p className='author'>Author: {props.book.volumeInfo.authors[0]} </p>
        {props.book.saleInfo.listPrice ? (
          <p className='price'>
            Price: {props.book.saleInfo.listPrice.amount}{" "}
          </p>
        ) : (
          ""
        )}

        <p className='summary'>Summary: {props.book.volumeInfo.description} </p>
      </div>
    </div>
  );
}
