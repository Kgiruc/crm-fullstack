import TableBody from '@mui/material/TableBody/TableBody';
import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { WarehouseItem } from '../../../models/warehouseItem';

type Props = {
  warehouseItems: WarehouseItem[];
};

function WarehouseList({ warehouseItems }: Props) {
  return (
    <TableBody>
      {warehouseItems.map((warehouseItem) => (
        <React.Fragment key={warehouseItem.id}>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>{warehouseItem.item_code}</TableCell>
            <TableCell>{warehouseItem.item_name}</TableCell>
            <TableCell>{warehouseItem.allocated_quantity}</TableCell>
            <TableCell>{warehouseItem.unit_of_measure}</TableCell>
            <TableCell>{warehouseItem.issued_quantity}</TableCell>
            {/* <TableCell>
              <IconButton
                onClick={() => agreement.id && deleteAgreement(agreement.id)}
              >
                <DeleteIcon />
              </IconButton>

              <IconButton
                onClick={() => dispatch(detailsAgreement({ agreement }))}
              >
                <MoreHorizIcon />
              </IconButton>
            </TableCell> */}
          </TableRow>

          {/* {agreement.id && (
            <TableRow>
              <AgreementDetails id={agreement.id} />
            </TableRow>
          )} */}
        </React.Fragment>
      ))}
    </TableBody>
  );
}

export default WarehouseList;
