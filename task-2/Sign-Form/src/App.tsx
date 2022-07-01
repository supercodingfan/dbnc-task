import { useEffect, useState } from "react";
import { Container, Grid, FormGroup } from "@mui/material";

import * as S from "./styled";

function App() {
  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={8} lg={6} height="100%">
          <S.FormBox>
            <FormGroup>
              <S.FormLabel>Your full given name:</S.FormLabel>
              <S.TextField
                hiddenLabel
                className="form-input"
                id="formInput"
                variant="filled"
                size="small"
              />
            </FormGroup>
            <S.DOBFormControl>
              <S.FormLabel>Date of birth</S.FormLabel>
              <S.DateField
                hiddenLabel
                id="formInput"
                className="form-input"
                defaultValue={"January 7, 1984"}
                variant="filled"
                size="small"
                type="date"
              />
            </S.DOBFormControl>
            <S.FormControl>
              <S.FormLabel>Country of residence or citizenship</S.FormLabel>
              <S.TextField
                hiddenLabel
                id="formInput"
                className="form-input"
                variant="filled"
                size="small"
              />
            </S.FormControl>
            <S.FormGroup>
              <S.FormLabel>What school do you plan to attend?</S.FormLabel>
              <S.TextField
                hiddenLabel
                id="formInput"
                className="form-input"
                variant="filled"
                size="small"
              />
            </S.FormGroup>
            <S.FormGroup>
              <S.FormLabel>
                Please take a comment to describe your intended area of study:
              </S.FormLabel>
              <S.TextField
                hiddenLabel
                id="formInput"
                className="form-input"
                variant="filled"
                size="small"
                placeholder="Enter details here"
                multiline
                rows={5}
              />
            </S.FormGroup>
          </S.FormBox>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
