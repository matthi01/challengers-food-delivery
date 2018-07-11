import React from "react";
import "./SubmitOrder.css";
import { Button } from "semantic-ui-react";

const SubmitOrder = props => {
    return (
        <div className="SubmitOrder">
            <div>
                <div className="totalPriceLabel">
                    <strong>Total Price:</strong> ${props.totalPrice.toFixed(2)}
                </div>
                <Button positive onClick={props.onSubmitOrder}>
                    Place Order
                </Button>
            </div>
        </div>
    );
};

export default SubmitOrder;
