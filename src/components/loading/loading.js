import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

const ParentSpinner = styled.div`
    display:flex;
    justify-content: center;
`;

const LoadingSpinner = styled(CircularProgress)`
    padding:20px;
`;




export default function Loading() {

  return (
    <ParentSpinner>
      <LoadingSpinner />
    </ParentSpinner>
  );
}
