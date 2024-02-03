import { paperContent } from "../Config/PaperContent"

const titleContainerStyle = {
  'marginTop': '60px',
  'marginLeft': '65px',
  'marginRight': '65px',
}

const paperInfoStyle = {
  'marginBottom': '15px', 
  'fontFamily': 'Trebuchet MS, sans-serif',
  'fontWeight': 400,
  'fontSize': '15px',
  color : '#5f6368'
}

const titleStyle = {
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

const linkContainerStyle = {
  'display': 'flex',
  'justifyContent': 'center' as 'center',
  'alignItems': 'center' as 'center',
  'marginTop': '20px',

}

const buttonStyle = {
  padding: '6px 14px',
  backgroundColor: '#fff',
  'border': '1px solid #f8f9fa',
  'borderRadius': '24px',
  'cursor': 'pointer',
  'fontFamily': 'Arial, sans-serif',
  'fontSize': '13px',
  'fontWeight': 550,
  boxShadow: 'rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .10) 0 6px 10px 0,rgba(0, 0, 0, .08) 0 1px 18px 0',
  color: '#3c4043'
}

function openLink(){
  window.open(paperContent.paperLink, '_blank')
}

export default function Title(){
  return (
    <div>
        <div style={titleContainerStyle}>
          <div style={paperInfoStyle}> {paperContent.paperInfo} </div>
          <div style={titleStyle}> {paperContent.title} </div>
        </div>
        <div style={authorStyle}>
            {paperContent.author}
        </div>
        <div style={affiliationStyle}>
            {paperContent.affiliation}
        </div>
        <div style={linkContainerStyle}>
          <div onClick={openLink} style={buttonStyle}> Paper </div>
        </div>
    </div>
  )
}
