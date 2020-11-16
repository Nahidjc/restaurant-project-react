import React, { Component } from 'react';
import DishDetail from './DishDetail';
import MenuItem from "./MenuItem";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CardColumns } from 'reactstrap';
import { connect } from 'react-redux';

const mapDispatchTOProps = dispatch => {
    return {
        addComment: (dishId, rating, author, comment) => dispatch({
            type: 'ADD_COMMENT',
            payload: {
                dishId: dishId,
                author: author,
                rating: rating,
                comment: comment
            }
        })
    }
}


const mapStateToProps = state => {
    // console.log("mapStateToProps", state);
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}


class Menu extends Component {
    state = {
        selectedDish: null,
        modalOpen: false
    }
    onDishSelect = dish => {
        // console.log(dish);
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
        document.title = "Menu";
        const menu = this.props.dishes.map(item => {
            return (
                <MenuItem dish={item} key={item.id}
                    onDishSelect={() => this.onDishSelect(item)}></MenuItem>

            )
        })
        let dishDetail = null;
        if (this.state.selectedDish != null) {
            const comments = this.props.comments.filter(comment => comment.dishId === this.state.selectedDish.id)
            dishDetail = <DishDetail comments={comments} addComment={this.props.addComment} dish={this.state.selectedDish}></DishDetail>
        }
        return (
            <div className="container">
                <div className="row">
                    <CardColumns>{menu}</CardColumns>
                    <Modal isOpen={this.state.modalOpen} >
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
export default connect(mapStateToProps, mapDispatchTOProps)(Menu);