import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Row, Col } from "reactstrap";
import ModalForm from "./Modals/Modal";
import DataTable from "./Tables/DataTable";
import { CSVLink } from "react-csv";
import {getItemsError, getItems, getItemsPending} from '../reducers/getItemsReducer';
import fetchItemsAction from '../actions/fetchItems';


class ApiPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items.items
    }
  }


 

  async componentDidMount() { // Có thể dùng getDerivedStateFromProps và componentDidUpdate để thay thế cho componentWillReceiveProps
    
    try {
      await this.props.fetchItemsAction();
  } catch (error) {
      console.log(error);
  }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.getDerivedStateFromProps === true) {
  //     // At this point, we're in the "commit" phase, so it's safe to load the new data.
  //     this.props.fetchItemsAction();
  //     this.setState({ items: this.props.items.items });
  //   }
  // }


  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     items: nextProps.items.items,
  //   });
  // }

  // async componentWillMount() {
  //   await(this.props.fetchItemsAction())
  //   // setTimeout(() => {
  //   //   console.log('Our data is fetched');
  //   //   await this.props.fetchItemsAction()
  //   // }, 1000)
  // }

// shouldComponentRender() {
//     if(this.state.pending === false) {return false};
//     // more tests
//     return true;
// }

  render() {
    console.log(this.props.items.items)
    return (
      <Container className="App">
        <Row>
          <Col>
            <h1 style={{ margin: "20px 0" }}>CRUD TABLE</h1>
            <p>Express server run on localhost:3000</p>
            <p>React app run on port 3001</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <CSVLink
              filename={"db.csv"}
              color="primary"
              style={{ float: "left", marginRight: "10px" }}
              className="btn btn-primary"
              data={this.props.items.items}
            >
              Download CSV
            </CSVLink>
            <ModalForm
              buttonLabel="Add Item"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
    error: getItemsError(state),
    items: state.items,
    pending: getItemsPending(state),
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchItemsAction: fetchItemsAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ApiPage );


