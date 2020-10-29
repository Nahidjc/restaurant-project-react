//import { Component } from "react";
import React, { Component } from 'react';
import DISHES from '../../data/dishes';
import DishDetail from './DishDetail';
import MenuItem from "./MenuItem";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CardColumns } from 'reactstrap';

class Menu extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null,
        modalOpen: false
    }
    onDishSelect = dish => {
        console.log(dish);
        this.setState({
            selectedDish: dish,
            modalOpen: !this.state.modalOpen
        });

    }
    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }
    render() {
        const menu = this.state.dishes.map(item => {
            return (
                <MenuItem dish={item} key={item.id}
                    onDishSelect={() => this.onDishSelect(item)}></MenuItem>

            )
        })
        let dishDetail = null;
        if (this.state.selectedDish != null) {
            dishDetail = <DishDetail dish={this.state.selectedDish}></DishDetail>
        }
        return (
            <div className="container">
                <div className="row">
                    <CardColumns>{menu}</CardColumns>
                    <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
                        <ModalBody>
                            {dishDetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secodary" onClick={this.toggleModal}>
                                Close
                            </Button>
                        </ModalFooter>
                    </Modal>

                </div>
            </div>
        )
    }
}
export default Menu;