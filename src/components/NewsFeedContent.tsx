import React from 'react';
import { Icon, Image, Item, Grid } from 'semantic-ui-react';
import stephane from '../img/selfie.jpg';
import karan from '../img/karan.jpg';


const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

const ItemExampleExtraContent = () => (
  <Grid>
  <Item.Group>
  <h1>Newsfeed</h1>
    <Item>
      <Item.Image as='a' href="../Profile-Stephane" size='small' src={stephane} />

      <Item.Content>
        <Item.Header as='a' href="../Profile-Stephane">Stephane Valentine</Item.Header>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Icon color='green' name='plus' />
          <Icon color='red' name='minus' /> 121 Votes
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
    <Item.Image as='a' href="../Profile-Karan" size='small' src={karan} />

      <Item.Content>
        <Item.Header as='a'>Karan </Item.Header>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Icon color='green' name='plus' />
          <Icon color='red' name='minus' /> 121 Votes
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image as='a' href="../Profile-Stephane" size='small' src={stephane} />

      <Item.Content>
        <Item.Header as='a' href="../Profile-Stephane">Stephane Valentine</Item.Header>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Icon color='green' name='plus' />
          <Icon color='red' name='minus' /> 121 Votes
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image as='a' href="../Profile-Stephane" size='small' src={stephane} />

      <Item.Content>
        <Item.Header as='a' href="../Profile-Stephane">Stephane Valentine</Item.Header>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Icon color='green' name='plus' />
          <Icon color='red' name='minus' /> 121 Votes
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
  </Grid>
)

export default ItemExampleExtraContent