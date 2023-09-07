type SectionProps = {
  name:string,
  content:string
};

const nameStyle = {
    'paddingTop': '50px',
    'paddingLeft': '150px',
    'textAlign': 'left' as 'left',
    'fontFamily': 'Georgia, serif',
    'fontWeight': 550,
    'fontSize': '25px'
}

const contentStyle = {
    'paddingTop': '10px',
    'paddingLeft': '150px',
    'paddingRight': '200px',
    'textAlign': 'justify' as 'justify',
    'lineHeight': '150%',
    'fontFamily': 'Arial, sans-serif',
    'fontWeight': 100,
    'fontSize': '15px'
}

export default function Section({ name, content }: SectionProps){
return (
  <div>
    <div style={nameStyle}>
      {name}
    </div>
    <div style={contentStyle}>
      {content}
    </div>
  </div>
)
}