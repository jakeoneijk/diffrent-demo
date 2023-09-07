import { paperContent } from "../Config/PaperContent"

const titleStyle = {
  'paddingTop': '60px',
  'paddingLeft': '65px',
  'paddingRight': '65px',
  'textAlign': 'center' as 'center',
  'fontFamily': 'Trebuchet MS, sans-serif',
  'fontWeight': 600,
  'fontSize': '35px'
}

const authorStyle = {
    'paddingTop': '30px',
    'textAlign': 'center' as 'center',
    'fontFamily': 'Georgia, serif',
    'fontWeight': 500,
    'fontSize': '25px'
}

const affiliationStyle = {
    'paddingTop': '30px',
    'textAlign': 'center' as 'center',
    'fontFamily': 'Arial, sans-serif',
    'fontWeight': 100,
    'fontSize': '21px'
}

export default function Title(){
  return (
    <div>
        <div style={titleStyle}>
            {paperContent.title}
        </div>
        <div style={authorStyle}>
            {paperContent.author}
        </div>
        <div style={affiliationStyle}>
            {paperContent.affiliation}
        </div>
    </div>
  )
}
