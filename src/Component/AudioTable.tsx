
import {TheadMetaType } from "./Type";

type AudioTableProps = {
    tableName:string,
    theadMetaArray: Array<TheadMetaType>;
    tableAudio: Array<Array<any>>
}

const tableNameStyle = {
    'paddingTop': '10px',
    'paddingBottom': '10px',
    'textAlign': 'left' as 'left',
    'fontFamily': 'Georgia, serif',
    'fontWeight': 550,
    'fontSize': '20px'
}

const thStyle = {
    'textAlign': 'center' as 'center',
    'fontFamily': 'Arial, sans-serif',
    'paddingLeft':'5px',
    'paddingRight':'5px'
}

const thNameStyle = {
    'fontWeight': 700,
    'fontSize': '18px',
}

const tdStyle = {
    'textAlign':'center' as 'center',
    'borderBottom': '3px solid #DEDEDE',
}

export default function AudioTable({tableName, theadMetaArray, tableAudio}:AudioTableProps){
  return (
    <div style={{'margin': 'auto'}}>
      <div style={tableNameStyle}>{tableName}</div>
      <thead>
        <tr>
          <th style={thStyle}>
            <div style={thNameStyle}>index</div>
          </th>
          {theadMetaArray.map((theadMeta) => {
              return (
                <th style={{...thStyle, ...{'color':theadMeta.color}}}>
                  <div style={thNameStyle}>{theadMeta.name}</div>
                  <div>{theadMeta.description}</div>
                </th>
          )})}
        </tr>
      </thead>
      <tbody>
        {
          tableAudio.map((rowAudio,index) =>{
            return(
              <tr>
                <td style={tdStyle}>{index}</td>
                {rowAudio.map((tableData)=>{
                    return(
                      <td style={tdStyle}><audio controls style={{width:'150px'}}><source src={tableData} type='audio/wav'/></audio></td>
                    )})}
              </tr>
            )})
        }
      </tbody>
    </div>
  )
}
