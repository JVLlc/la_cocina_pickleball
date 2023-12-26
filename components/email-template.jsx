import * as React from 'react';


export const EmailTemplate = ({
  name, email, message
}) => (
  <div>
    <p>La persona, {name} con el email {email}. Les dejo este mensaje: {message}</p>
  </div>
);