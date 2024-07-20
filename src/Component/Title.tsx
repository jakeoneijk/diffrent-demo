import { paperContent } from "../Config/PaperContent"
import arxiv from '../Source/image/ArXiv.png';
import Button from "./Button"

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

const hrStyle = {
  'marginTop': '20px',
  'marginLeft': '30px',
  'marginRight': '30px',
}

const linkListStyle = {
  'display': 'flex',
  'justifyContent': 'center' as 'center',
  'alignItems': 'center' as 'center',
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
          <Button onClick={openLink}> <img style={{width:'30px', marginRight: '5px'}} src={arxiv} /> Paper </Button>
        </div>
        <hr style={hrStyle}/>
        <div style={linkListStyle}>
          <a href="/test set meta data.yaml" download="test set meta data.yaml">
            test set meta data.yaml
          </a>
        </div>
    </div>
  )
}
