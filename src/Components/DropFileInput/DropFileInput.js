import { CloseOutlined } from "@mui/icons-material";
import {
  Button,
  IconButton,
  Stack,
  Typography,
  useTheme
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import uploadImg from "../../assets/cloud-upload-regular-240.png";
import filePdf from "../../assets/file-pdf-solid-240.png";
import { primary } from "../PdfUploader";
import "./drop-file-input.css";

const DropFileInput = (props) => {
  const theme = useTheme();
  const wrapperRef = useRef(null);
  const bpSMd = theme.breakpoints.down("sm");

  const [file, setFile] = useState(null);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");

  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");

  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      setFile(newFile);
    }
  };

  const fileRemove = () => {
    setFile(null);
  };

  useEffect(() => {
    props.onFileChange(file);
  }, [file]);

  return (
    <>
      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        alignItems="center"
        sx={{ marginBottom: 3 }}
      >
        <Typography
          // gutterBottom
          variant="h1"
          sx={{
            fontSize: "40px",
            textTransform: "uppercase",
            fontWeight: "bold",
            letterSpacing: 1,
            color: primary,
            [bpSMd]: { fontSize: "20px" },
          }}
        >
          PDF
        </Typography>
        <Typography
          // gutterBottom
          variant="h1"
          sx={{
            fontSize: "40px",
            textTransform: "uppercase",
            fontWeight: "bold",
            letterSpacing: 1,
            color: "text.primary",
            [bpSMd]: { fontSize: "20px" },
          }}
        >
          to Image
        </Typography>
      </Stack>
      {!file && (
        <Button
          // component="label"
          ref={wrapperRef}
          className="drop-file-input"
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          <div className="drop-file-input__label">
            <img src={uploadImg} alt="" />
            <p>Drag & Drop your files here</p>
          </div>
          <input
            type="file"
            accept="application/pdf"
            value=""
            onChange={onFileDrop}
          />
        </Button>
      )}
      {file ? (
        <div className="drop-file-preview">
          <p className="drop-file-preview__title">Uploaded file</p>
          <div className="drop-file-preview__item">
            <img src={filePdf} alt="PDF Icon" />
            <div className="drop-file-preview__item__info">
              <p>{file.name}</p>
              <p>{file.size}B</p>
            </div>
            <IconButton onClick={fileRemove}>
              <CloseOutlined />
            </IconButton>
          </div>
        </div>
      ) : null}
    </>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;
