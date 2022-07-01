import styled from "@emotion/styled";
import {
  Box,
  FormControl as MuiFormControl,
  FormGroup as MuiFormGroup,
  FormLabel as MuiFormLabel,
  TextField as MuiTextField,
} from "@mui/material";

export const FormBox = styled(Box)`
  background-color: #147dd9;
  padding: 20px 30px;
  width: 100%;
`;

export const FormGroup = styled(MuiFormGroup)`
  margin-top: 40px;
`;

export const FormControl = styled(MuiFormControl)`
  margin-top: 40px;
  width: 50%;
`;

export const DOBFormControl = styled(MuiFormControl)`
  margin-top: 40px;
  width: 50%;
`;

export const DateField = styled(MuiTextField)`
  border: 1px solid white;
  margin-right: 15px;
`;

export const FormLabel = styled(MuiFormLabel)`
  color: white;
  font-family: "Lato";
  font-style: italic;
  font-size: 18px;
  margin-bottom: 5px;
`;

export const TextField = styled(MuiTextField)`
  border: 1px solid white;
`;
