import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Radio, RadioGroup } from "@mui/material";

export default function AddressForm() {
  const NCR = [
    "Caloocan City",
    "Las Piñas City",
    "Makati City",
    "Malabon City",
    "Mandaluyong City",
    "Manila City",
    "Marikina City",
    "Muntinlupa City",
    "Navotas City",
    "Parañaque City",
    "Pasay City",
    "Pasig City",
    "Quezon City",
    "San Juan City",
    "Taguig City",
    "Valenzuela City",
  ];

  const CAVITE = [
    "Cavite City",
    "Kawit",
    "Noveleta",
    "Rosario",
    "City of Bacoor",
    "City of Imus",
    "City of Dasmariñas",
    "Carmona",
    "Silang",
    "General Mariano Alvarez",
    "General Trias City",
    "Amadeo",
    "Indang",
    "Tanza",
    "Trece Martires City",
    "Tagaytay City",
    "Alfonso",
    "General Emilio Aguinaldo",
    "Magallanes",
    "Maragondon",
    "Mendez",
    "Naic",
    "Ternate",
  ];

  const LAGUNA = [];
  const BATANGAS = [];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Client Details
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="propertyType"
            name="propertyType"
            label="Property Type"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="number"
            name="number"
            label="Contact number"
            fullWidth
            // autoComplete=""
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            // autoComplete="date"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="primary" name="saveAddress" value="yes" />
            }
            label="I have read and agree to the terms and privacy policy."
          />
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            //   value={value}
            //   onChange={handleChange}
          >
            <FormControlLabel
              value="personal"
              control={<Radio size="small" />}
              label="Personal"
            />
            <FormControlLabel
              value="business"
              control={<Radio size="small" />}
              label="Business"
            />
          </RadioGroup>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
