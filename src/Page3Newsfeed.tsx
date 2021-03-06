import * as React from "react";
import { RootState } from "./store";
import NewsFeedContent from "./components/NewsFeedContent";
import MessageExampleList from "./components/ListMessage";
import { addPost, removePost } from "./store/newsfeed/action";
import { Post } from "./store/newsfeed/types";
import { connect } from "react-redux";
import { Form, TextArea, Item, Icon, Grid, Button } from "semantic-ui-react";
import { Fragment } from "react";

import marvin from "./img/ProfilePictures/dog5.png";

export interface Page3Props {
  addPost: typeof addPost;
  removePost: typeof removePost;
  posts: Post[];
}

export class Page3 extends React.Component<Page3Props> {
  // This generates the random id.
  randomID = (): number => {
    let randomNumber: number = Math.floor(Math.random() * 50);
    randomNumber += this.props.posts.length;
    return randomNumber;
  };

  // This will add a new "post" or in our case a new "bark".
  newBark = (e: any) => {
    e.preventDefault();

    // This grabs the text value from our form.
    const textArea: HTMLInputElement | null = document.querySelector(
      '[posted="postedtext"]'
    );
    console.log(this.randomID());
    if (textArea !== null) console.log(textArea.value);
    let textAreaValue: string = "";

    if (textArea !== null) textAreaValue = textArea.value;

    this.props.addPost({
      id: this.randomID(),
      posted: textAreaValue,
    });
  };

  public render() {
    return (
      <Fragment>
        <MessageExampleList />
        <h1>Welcome to the Doge Park</h1>
        <br />
        <Form onSubmit={this.newBark} >
          <TextArea posted="postedtext" style={{ maxWidth: 1000 }} />
          <p></p>
          <Button type="Submit" value="Bark" color="teal" size='large'>Bark</Button>
        </Form>
        <br />
        <NewsFeedContent />
        <br />
        <br />
        {this.props.posts.map((element) => (
          <Grid>
            <Item.Group>
              <Item>
                <Item.Image
                  as="a"
                  href="../Profile-Marvin"
                  size="small"
                  src={marvin}
                />

                <Item.Content>
                  <Item.Header
                    as="a"
                    href="../Profile-Marvin"
                    style={{ maxWidth: 550 }}
                  >
                    Sniphersz
                  </Item.Header>
                  <Item.Meta style={{ maxWidth: 550 }}>
                    Human: Marvin / Breed: Bichon Frise Poopdle Mix / Hobby: Paw
                    Patroller
                    <Icon name="shield" color="green" />
                    <Icon name="thumbs up outline" color="purple" />
                  </Item.Meta>
                  <Item.Content style={{ maxWidth: 550 }}>
                    {" "}
                    {element.posted}{" "}
                  </Item.Content>
                  <Item.Extra>
                    <Icon color="blue" name="food" />
                    Treats <Icon color="blue" name="headphones" />
                    Re-Bark! <br />
                    <Icon color="green" name="plus" />
                    <Icon color="red" name="minus" /> Paws
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </Grid>
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    posts: state.feed.posts,
  };
};

export default connect(mapStateToProps, { addPost, removePost })(Page3);
