import { Grid } from "@mui/material";
import React, { useState } from "react";
import DropFileInput from "./DropFileInput/DropFileInput";
import PdfToImageConverter from "./PdfToImageConverter";

export const primary = "#176ede";

export default function PdfUploader() {
  const [pdfFile, setPdfFile] = useState(null);

  return (
    <div style={{ height: "100dvh" }}>
      <Grid container className="d-flex" sx={{ py: 6, px: 4 }}>
        <Grid item className="box">
          <DropFileInput onFileChange={(file) => setPdfFile(file)} />
        </Grid>
        {pdfFile && (
          <Grid item sx={{ width: "100%" }}>
            <PdfToImageConverter
              pdfUrl={URL.createObjectURL(pdfFile)}
              fileName={pdfFile.name}
            />
          </Grid>
        )}
      </Grid>
    </div>
  );
}
