import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


class Customer extends React.Component {
    render() {
        return(
        <TableRow>
<TableCell>{this.props.id}</TableCell>
<TableCell>{this.props.ondo}</TableCell>
<TableCell>{this.props.sepdo}</TableCell>
<TableCell>{this.props.hontak}</TableCell>     
<TableCell>{this.props.toyang}</TableCell>     
<TableCell>{this.props.pump}</TableCell>     
        </TableRow>
        )
      
    }
}


export default Customer;