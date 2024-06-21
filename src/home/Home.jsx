import { Container, ButtonGroup, Button, Segment, ButtonContent} from "semantic-ui-react";


export default function Home() {
  return (
    <>
      <Container color="black" style={{ maxWidth: "400px", margin: "auto" }}>
{/*         <Image
          src="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
          circular
        /> */}

        <Segment>
          <ButtonGroup>
            <ButtonGroup vertical>
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
            </ButtonGroup>
          </ButtonGroup>
          <ButtonGroup>
            <ButtonGroup vertical>
              <Button>4</Button>
              <Button>5</Button>
              <Button>6</Button>
            </ButtonGroup>
          </ButtonGroup>
          <ButtonGroup>
            <ButtonGroup vertical>
              <Button>7</Button>
              <Button>8</Button>
              <Button>9</Button>
            </ButtonGroup>
          </ButtonGroup>
        </Segment>

      </Container>
    </>
  );
}
