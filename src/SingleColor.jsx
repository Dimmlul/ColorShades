/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Swal from 'sweetalert2'; 

const SingleColor = ({ index, color }) => {
  const { hex, weight } = color;

  const saveToClipboard = async (e) => {
    e.preventDefault(); 

    if (navigator.clipboard) {
      try {

        await navigator.clipboard.writeText(`#${hex}`);
        
  
        Swal.fire({
          title: 'Color Copied!',
          html: `Hex: #${hex}<br>Weight: ${weight}%`,
          icon: 'success',
          confirmButtonText: 'Close'
        });
      } catch (error) {

        Swal.fire({
          title: 'Failed to Copy',
          text: 'There was an error copying the color to the clipboard.',
          icon: 'error',
          confirmButtonText: 'Try Again'
        });
      }
    } else {
      Swal.fire({
        title: 'Clipboard Not Available',
        text: 'Clipboard access is not supported by your browser.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <article
      className={`color ${index > 10 ? 'color-light' : ''}`}
      style={{ backgroundColor: `#${hex}` }}
      onClick={saveToClipboard}  
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};

export default SingleColor;
