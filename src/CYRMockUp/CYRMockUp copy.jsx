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
  ButtonGroup
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
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "10px",
          marginBottom: "10px",
        }}
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

              <Container>
                <Grid className="grid-container">
                  <GridRow>
                    <Button className="GridButton">1</Button>
                    <Button className="GridButton">2</Button>
                    <Button className="GridButton">3</Button>
                  </GridRow>
                  <GridRow>
                    <Button className="GridButton">4</Button>
                    <Button className="GridButton">5</Button>
                    <Button className="GridButton">6</Button>
                  </GridRow>
                  <GridRow>
                    <Button className="GridButton">7</Button>
                    <Button className="GridButton">8</Button>
                    <Button className="GridButton">9</Button>
                  </GridRow>
                </Grid>
              </Container>
              
{/*               {numCellsByRows.map((numCells) => (
                  {numCells.map((numCell) => (
                      <Button className="GridButton">{numCell}</Button>
                  ))}
                ))} */}
              
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
    </>
  );
}


