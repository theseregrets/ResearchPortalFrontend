import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { projects } from '../../Data/projects';
import { projectField } from '../../Data/project-fields';

const columns = projectField;

const rows = projects;

export default function DataGridDemo() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <h1 style={{ textAlign: 'center', margin: '20px' }}>Applications</h1>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={projects.length}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
