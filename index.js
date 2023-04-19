const Box = props => {
    const {boxSize, box} = props;
    return(
        <div className={`${box} box-style`}>
            <p className="box-text">{boxSize}</p>
        </div>
    );
}

const element = (
  <div className="boxes-page-container">
      <h1 className="page-heading">Boxes</h1>
      <div className="boxes-container">
        <Box boxSize="Small" box="small-box"/>
        <Box boxSize="Medium" box="medium-box"/>
        <Box boxSize="Large" box="large-box"/>
      </div>
  </div>
)

ReactDOM.render(element, document.getElementById("root"));
