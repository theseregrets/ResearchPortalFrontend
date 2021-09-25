/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
  margin: '0 0 10px 0',
};

const activeStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

export default function FileDropzone({ setFile, cv }) {
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: 'application/pdf',
    onDrop: (files) => setFile(files),
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...activeStyle,
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [true, isDragReject, isDragAccept]
  );

  // eslint-disable-next-line
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  return (
    <div>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Drag n drop Resume here, or click to select files (pdf)</p>
      </div>
      {cv != null && (
        <div style={{ display: 'flex' }}>
          <h4>Uploaded file-</h4>
          <a href={cv} target="_blank" rel="noreferrer">
            Click Here
          </a>
        </div>
      )}
    </div>
  );
}
