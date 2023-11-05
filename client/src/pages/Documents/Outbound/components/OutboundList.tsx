import { IconButton, TableBody, TableCell, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import GetAppIcon from '@mui/icons-material/GetApp';
import React from 'react';
import { Link } from 'react-router-dom';
import { Outbound } from '../../../../models/outbound';
import { useDeleteOutboundMutation } from '../services/outboundApi';
import generateAndDownloadDocx from '../../../../utils/docxUtils';
import { useAppSelector } from '../../../../store/store';

type Props = {
  outbounds: Outbound[];
};

function OutboundList({ outbounds }: Props) {
  const [deleteOutbound] = useDeleteOutboundMutation();
  const profileInfo = useAppSelector((state) => state.account);

  return (
    <TableBody>
      {outbounds.map((outbound) => (
        <React.Fragment key={outbound.id}>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>{outbound.wz_number}</TableCell>
            <TableCell>{outbound.from_company}</TableCell>
            <TableCell sx={{ display: 'flex', gap: '10px' }}>
              <IconButton
                onClick={() => generateAndDownloadDocx(outbound, profileInfo)}
              >
                <GetAppIcon />
              </IconButton>
              <IconButton
                onClick={() => outbound.id && deleteOutbound(outbound.id)}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                component={Link}
                state={outbound}
                to={`documents/outbounds/update/${outbound.id}`}
              >
                <EditIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        </React.Fragment>
      ))}
    </TableBody>
  );
}

export default OutboundList;
