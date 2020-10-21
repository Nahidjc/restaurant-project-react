import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardImgOverlay } from 'reactstrap';

const MenuItem = (props) => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardImg
                        width="100%"
                        alt={props.dish.name}
                        src={props.dish.image}
                        style={{ opacity: "0.5" }}
                    ></CardImg>
                    <CardImgOverlay>
                        <CardTitle style={{ cursor: "pointer" }}
                            onClick={props.onDishSelect}
                        >
                            {props.dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>

        </div>
    );
};

export default MenuItem;