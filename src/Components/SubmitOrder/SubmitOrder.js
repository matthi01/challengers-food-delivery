import React from "react";
import "./SubmitOrder.css";
import { Button } from "semantic-ui-react";

const SubmitOrder = props => {
    return (
        <div className="SubmitOrder">
            <div>
                <Button positive onClick={props.onSubmitOrder}>
                    Order
                </Button>
            </div>
        </div>
    );
};

export default SubmitOrder;
