import React, { Fragment } from 'react';
import Posts from './Posts'
import Form from './Form'
export default function Dashboard() {

  return (
    <div className="Dashboard offset-md-2">
      <Form />
      <Posts />
    </div>
  );
}
