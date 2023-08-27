import React from "react";
import Table from "react-bootstrap/Table";
import dateFormat from "dateformat";

const DishComment = props => {
    return(
        props.comment.map(comments =>{
            return (
                <div>
                    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>comment</th>
          <th>author</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{comments.id}</td>
          <td>{comments.comment}</td>
          <td>{comments.author}</td>
          <td>{dateFormat(comments.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</td>
        </tr>
      </tbody>
    </Table>
 
                </div>
            )
        })
    )
}

export default DishComment;