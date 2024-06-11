import React from 'react';

function OrderSteps() {
    return (
        <div className="order-steps">
            <h2>Complete your order in 3 easy steps</h2>
            <div className="steps">
                <div className="step">
                    <img src="./assets/images/step1.jpg" alt="Step 1" />
                    <p>Get notified when your favourite restaurant is cooking your favourite dish</p>
                </div>
                <div className="step">
                    <img src="./assets/images/step2.jpg" alt="Step 2" />
                    <p>Place your order for your food and groceries</p>
                </div>
                <div className="step">
                    <img src="./assets/images/step3.jpg" alt="Step 3" />
                    <p>Track the delivery of your orders to your door, and get notified when your rider is nearby</p>
                </div>
            </div>
        </div>
    );
}

export default OrderSteps;
