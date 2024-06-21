import {
  GridRow,
  GridColumn,
  Grid,
  Image,
  Segment,
  Header,
  List,
  Container,
  Icon,
  Input,
  Button,
  ButtonGroup,
  Advertisement,
} from "semantic-ui-react";

import "../app.css";

const numCellsByRows = [
  ['1','2','3'],
  ['4','5','6'],
  ['7','8','9'],
]

export default function CYRMockUp() {
  return (
    <>
      <Container
/*         style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "10px",
          marginBottom: "10px",
        }} */
      >

        <Grid columns={2} divided>
          <GridRow>
            <GridColumn width={4}>

              <Header as="h3">Game</Header>

              <Container
                style={{
                  border: "none",
                  paddingLeft: "10px",
                  paddingBottom: "5px",
                }}
              >
                <Button
                  basic
                  fluid
                  content="New Game"
                  labelPosition="center"
                />
              </Container>

            </GridColumn>

            <GridColumn width={12}>
              <>
{/*               {numCellsByRows.map((numCells) => (
                  {numCells.map((numCell) => (
                      <div className="Square">{numCell}</div>
                  ))}
                ))} */}

{/*               <Container> */}
                  <>
                    <div className="Square">1</div>
                    <div className="Square">2</div> 
                    <div className="Square">3</div> 
                  </>
                  <>
                    <div className="Square">4</div> 
                    <div className="Square">5</div> 
                    <div className="Square">6</div> 
                  </>
                  <>
                    <div className="Square">7</div> 
                    <div className="Square">8</div> 
                    <div className="Square">9</div> 
                  </>
{/*               </Container> */}
              </>
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
    </>
  );
}


