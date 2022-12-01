const eGridDiv = document.querySelector('#myGrid');
const array = generateArray(100);
const gridOptions = {
  columnDefs: [
    {
      headerName: 'GROUP1',
      children: [
        {
          field: 'val6',
          headerName: 'Col1',
          cellRenderer: countryCellRenderer,
        },
        { field: 'val1', headerName: 'Col2' },
        {
          field: 'val2',
          headerName: 'Col3',
          aggFunc: 'sum',
          valueFormatter: (param) => `${param.value} кг`,
        },
      ],
    },
    {
      headerName: 'GROUP2',
      children: [
        { columnGroupShow: 'open', field: 'val4' },
        {
          field: 'val5',
          colId: 'val4&val5',
          headerName: 'Col4',
          valueGetter: (param) => param.data.val4 + param.data.val5,
          aggFunc: 'avg',
        },
        {
          field: 'val7',
          headerName: 'Col5',
          cellStyle: { fontWeight: 'bold', textDecoration: 'underline' },
        },
        { field: 'val8', headerName: 'Col6', filter: true },
      ],
    },
  ],
  autoGroupColumnDef: {
    minWidth: 300,
    cellRendererParams: 'Total',
  },
  onCellClicked: (params) => console.log(JSON.stringify(params.data)),
  groupIncludeTotalFooter: true,
  rowData: array,
};
new agGrid.Grid(eGridDiv, gridOptions);

function countryCellRenderer(params) {
  return `<img alt="" src="${params.value}">`;
}
