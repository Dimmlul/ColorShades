/* eslint-disable no-unused-vars */
import React from 'react';
import { toast } from 'react-toastify';
import Modal from 'react-modal';

const SingleColor = ({ index, color }) => {
  const { hex, weight } = color;

  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success(`Color #${hex} copied to clipboard! Weight: ${weight}%`);
      } catch (error) {
        toast.error('Failed to copy color to clipboard');
      }
    } else {
      toast.error('Clipboard access not available');
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
