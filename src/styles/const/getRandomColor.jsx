import React from "react"
import $ from 'jquery'

const getRandomColor = () => {
  const colors = [
    '#0d6efd', '#6610f2', '#6f42c1', '#d63384', '#dc3545', '#fd7e14', '#ffc107',
    '#198754', '#20c997', '#0dcaf0'
  ];
    
  const colorIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[colorIndex];
    
  $('p, cite').fadeOut(600, function () {
    $('#tweet-quote, #tumblr-quote, #github, .bg-color, #new-quote').css('background-color', randomColor)
    $('p, cite').css('color', randomColor)
    $(this).fadeIn(700);
  });

}

export default getRandomColor