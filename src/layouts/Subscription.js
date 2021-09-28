import React from 'react'
import Button from 'components/Button'

export default function Subscription() {
    return (
      <div className="subscription bg-cyan text-white">
        <h1 className="subscription__title ">Monthly Subscription</h1>
        <h2 className="subscription__pricing">
          $29 <span className="text-light-gray fw-regular">per month</span>
        </h2>
        <p className="subscription__description">Full access for less than $1 a day</p>
        <Button>Sign up</Button>
      </div>
    );
}
