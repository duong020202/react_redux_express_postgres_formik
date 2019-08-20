import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Table, Button } from "reactstrap";
import ModalForm from "../Modals/Modal";
import { Formik, Form, Field, FieldArray } from "formik";
import {getItemsError, getItems, getItemsPending} from '../../reducers/getItemsReducer';
import fetchItemsAction from '../../actions/fetchItems';
import deleteItemAction from '../../actions/deleteItem';

class DataTable extends Component {

  render() {
    const List = () => (
      <div>
        <Formik
          initialValues={{ items: this.props.items.items }} 
          onSubmit={values =>
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
            }, 500)
          }
          render={({ values }) => (
            <Form>
              <FieldArray
                name="items"
                render={arrayHelpers => (
                  <div>
                    <Table responsive hover>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>First</th>
                          <th>Last</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Location</th>
                          <th>Hobby</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {values.items.map((item, index) => (
                          <tr id={index}>
                            <th scope="row">{item.id}</th>

                            <td>
                              <Field name={`items.${index}.first`} />
                            </td>
                            <td>
                              <Field name={`items.${index}.last`} />
                            </td>
                            <td>
                              <Field name={`items.${index}.email`} />
                            </td>
                            <td>
                              <Field name={`items.${index}.phone`} />
                            </td>
                            <td>
                              <Field name={`items.${index}.location`} />
                            </td>
                            <td>
                              <Field name={`items.${index}.hobby`} />
                            </td>
                            <td>

                              <div style={{ width: "110px" }}>
                                <ModalForm
                                  buttonLabel="Edit"
                                  item={item}
                                />{" "}
                                <Button
                                  color="danger"
                                  onClick={() => this.props.deleteItemAction(item.id)}
                                >
                                  Del
                                </Button>
                                
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                )}
              />
            </Form>
          )}
        />
      </div>
    );
    return <List />;
  }
}

const mapStateToProps = state => ({
  error: getItemsError(state),
  items: state.items,
  pending: getItemsPending(state),
})

const mapDispatchToProps = dispatch => bindActionCreators({
fetchItemsAction: fetchItemsAction,
deleteItemAction: deleteItemAction
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataTable );

// export default DataTable;
