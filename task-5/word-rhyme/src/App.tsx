import React, { useState } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Grid,
  CircularProgress,
} from "@mui/material";
import { useSnackbar } from "notistack";

import { api } from "./api";

type Word = {
  word: string;
  score: number;
};

function App() {
  const [value, setValue] = useState<string>("");
  const [words, setWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.key === "Enter") {
      setLoading(true);
      api
        .getRhymeWords(value)
        .then((res) => {
          setWords(res.data);
          setLoading(false);
        })
        .catch((err) => {
          enqueueSnackbar("Fetch failed", { variant: "error" });
          setWords([]);
          setLoading(false);
        });
    }
  };

  return (
    <Container>
      <Typography variant="h1" textAlign="center" mt={2}>
        Find Rhymes
      </Typography>
      <Box mt={2} component={Paper}>
        <TextField
          placeholder="Input word"
          value={value}
          onChange={onChange}
          onKeyUp={onKeyUp}
          fullWidth
          disabled={loading}
        />
      </Box>
      <Box
        mt={3}
        p={3}
        component={Paper}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {!loading ? (
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {words.map((word) => (
              <Grid key={word.word} item xs={4} md={3} lg={2}>
                <Typography>{word.word}</Typography>
              </Grid>
            ))}
            {words.length === 0 && (
              <Typography textAlign="center" fontSize="25px" width="100%">
                No Rhymes
              </Typography>
            )}
          </Grid>
        ) : (
          <CircularProgress />
        )}
      </Box>
    </Container>
  );
}

export default App;
