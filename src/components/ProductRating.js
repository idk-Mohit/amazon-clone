import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';

export default function ProductRating({ rating }) {
  return (
    <Container>
      <Stack spacing={1}>
        <Rating name="half-rating" defaultValue={rating} precision={0.5} readOnly />
      </Stack>
    </Container>
  );
}

const Container = styled.div`
margin:.3rem 0;
`