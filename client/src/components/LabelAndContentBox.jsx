import React from 'react';

const LabelAndContentBox = ({ label, content, labelColSpan, contentColSpan }) => {
  return (
    <>
      <th colSpan={labelColSpan}>{label}</th>
      <td colSpan={contentColSpan}>{content}</td>
    </>
  );
};

export default LabelAndContentBox;
