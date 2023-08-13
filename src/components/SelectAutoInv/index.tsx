import { useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useName } from "../../contexts/hooks/NewName";
import { useDashboard } from "../../contexts/hooks/Dashboard";

interface UIProps {
  nameInv: string;
  handleChange: (event: SelectChangeEvent<string>) => void;
}

export default function SelectAutoInv({ nameInv, handleChange }: UIProps) {
  const { nameData } = useName();
  const { setUIRemoveData } = useDashboard();

  useEffect(() => {
    if (!nameInv) {
      setUIRemoveData();
    }
  }, [nameInv]);

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 250, minHeight: 10 }}>
        <InputLabel id="demo-simple-select-label">inventario_geral</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={nameInv}
          color="success"
          onChange={handleChange}
          autoWidth
          label="inventario_geral"
        >
          <MenuItem key="inv" value="inventario_geral">
            inventario_geral
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
