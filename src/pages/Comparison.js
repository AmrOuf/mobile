import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

const Comparison = ({ comparedMobiles, setCurrentMobile }) => {
  const [mobile1, mobile2] = comparedMobiles;

  const handleClick = (index) => {
    if (index === 1) setCurrentMobile(mobile1);
    else setCurrentMobile(mobile2);
  };

  return (
    <Fragment>
      <Container>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell
                  onClick={() => handleClick(1)}
                  component={Link}
                  to={'/mobile-details'}
                >
                  {mobile1.DeviceName}
                </TableCell>
                <TableCell
                  onClick={() => handleClick(2)}
                  component={Link}
                  to={'/mobile-details'}
                >
                  {mobile2.DeviceName}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>OS</TableCell>
                <TableCell>{mobile1.os}</TableCell>
                <TableCell>{mobile2.os}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Resolution</TableCell>
                <TableCell>{mobile1.resolution}</TableCell>
                <TableCell>{mobile2.resolution}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Announced on</TableCell>
                <TableCell>{mobile1.announced}</TableCell>
                <TableCell>{mobile2.announced}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Size</TableCell>
                <TableCell>{mobile1.size}</TableCell>
                <TableCell>{mobile2.size}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Weight</TableCell>
                <TableCell>{mobile1.weight}</TableCell>
                <TableCell>{mobile2.weight}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Fragment>
  );
};

export default Comparison;
