import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Radio, RadioGroup } from "@mui/material";

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Service Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="serviceType"
            label="Service Type"
            fullWidth
            // autoComplete="cc-name"
            variant="standard"
            //repair, cleaning, installation, relocation, dismantling
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="airconType"
            label="Aircon Type"
            fullWidth
            // autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="brand"
            label="Brand"
            fullWidth
            // autoComplete=""
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="unitType"
            label="Unit Type"
            helperText="Last three digits on signature strip"
            fullWidth
            // autoComplete="cc-csc"
            variant="standard"
            //non inverter, inverter, idk
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="problem"
            name="problem"
            label="Unit Problem"
            fullWidth
            // autoComplete="shipping address-line2"
            variant="standard"
            // maxRows={4}
            // helperText="Bried description of encountered ..."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="quantity"
            label="Quantity"
            helperText="Last three digits on signature strip"
            fullWidth
            // autoComplete="cc-csc"
            variant="standard"
            //non inverter, inverter, idk
          />
        </Grid>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          //   value={value}
          //   onChange={handleChange}
        >
          <FormControlLabel
            value="out"
            control={<Radio />}
            label="Out of warranty"
          />
          <FormControlLabel
            value="in"
            control={<Radio />}
            label="In warranty"
          />
        </RadioGroup>
        {/* reword these */}
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Long ladder needed for unit located above 10ft/3m (+Php 350.00)"
          />
        </Grid>{" "}
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Freon re-charge may be needed (additional charge applies)"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
