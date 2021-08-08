import parse from 'html-react-parser';

// <p className="leading-relaxed mb-4">{parse(text)}</p>

const Description = ({text}) => {
  return (
    <>
      {parse(text)}
    </>
  )
}

export default Description;
