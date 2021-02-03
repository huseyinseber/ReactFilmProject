import React, { Component } from "react";
import { Alert, Image } from "react-bootstrap";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Alert variant="success">
          <Alert.Heading>Film Sitesinde Yenilikler</Alert.Heading>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>
        </Alert>
        <Image
          className="w-100 "
          src="https://cdn.pixabay.com/photo/2015/09/02/12/45/movie-918655_960_720.jpg"
          fluid
        />
      </div>
    );
  }
}
