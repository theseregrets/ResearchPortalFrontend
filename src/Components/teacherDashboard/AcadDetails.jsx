import React from 'react';
import { useSelector } from 'react-redux';

export default function AcadDetails() {
  const state = useSelector((state) => state.profile);

  return (
    <div>
      <h4>Department: {state.department}</h4>
      <h4>Contacts: {state.contacts}</h4>
    </div>
  );
}
