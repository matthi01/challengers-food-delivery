import React from "react";
import "./MenuItem.css";
import { Button } from "semantic-ui-react";

const MenuItem = props => {
    let itemQuantity = 0;
    let item = props.orderData.find(order => {
        return order.item === props.itemName;
    });

    if (item && item.quantity > 0) {
        itemQuantity = item.quantity;
    }

    return (
        <div className="MenuItem">
            <div>${props.itemPrice.toFixed(2)}</div>
            <div>
                <strong>{props.itemName}</strong>
            </div>
            <Button.Group size="mini">
                <Button
                    onClick={() =>
                        props.onIncrementClick(
                            props.restaurantId,
                            props.itemName,
                            props.itemPrice
                        )
                    }
                >
                    Add
                </Button>
                <Button.Or text={itemQuantity} />
                <Button
                    onClick={() =>
                        props.onDecrementClick(
                            props.restaurantId,
                            props.itemName,
                            props.itemPrice
                        )
                    }
                >
                    Remove
                </Button>
            </Button.Group>
        </div>
    );
};

export default MenuItem;
