/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { CodeSharp } from '@material-ui/icons';
import { gridColumnsTotalWidthSelector } from '@material-ui/x-grid';
import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import { useSelector } from 'react-redux';

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

export default function FileDropzone(props) {
  const { Edit } = props;
  const state = useSelector((state) => state.profile);
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: 'application/pdf',
    onDrop: (files) => props.setFile(files),
    disabled: !Edit,
    onDragEnter: () => {
      if (!Edit) {
        alert('click on update button to upload CV');
      }
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(Edit ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [Edit, isDragReject, isDragAccept]
  );

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  return (
    <div>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        {Edit ? (
          <p>Drag n drop Resume here, or click to select files (pdf)</p>
        ) : (
          <p>click on Edit button to upload CV</p>
        )}
      </div>
      <aside>
        <h5>Uploaded file-</h5>
        <ul>{files}</ul>
      </aside>
    </div>
  );
}
