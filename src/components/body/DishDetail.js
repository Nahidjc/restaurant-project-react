import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardImgOverlay } from 'reactstrap';
import LoadComments from './LoadComments';

const DishDetail = (props) => {
    return (
        <div>
            <Card style={{ marginTop: "20px" }}>
                <CardImg top src={props.dish.image}
                    alt={props.dish.name}>
                </CardImg>
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle>
                        {props.dish.name}
                    </CardTitle>
                    <CardText>
                        <p>  {props.dish.price} /-</p>
                        {props.dish.description}
                    </CardText>
                    <hr />
                    <LoadComments comments={props.comments}></LoadComments>
                </CardBody>
            </Card>
        </div>
    );
};

export default DishDetail;