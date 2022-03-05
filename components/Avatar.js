import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    name: state.name
  }
}

function mapDispatchToProps(dispatch){
  return {
    updateName: name => dispatch({
      type: "UPDATE_NAME",
      name: name
    })
  }
}

class Avatar extends React.Component {

  state = {
    photo: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-medalliacommunity/contentbuilder/avatar.png"
  }

  componentDidMount() {
    fetch("http://hp-api.herokuapp.com/api/characters")
    .then(response => response.json())
    .then(responseData => {
      //console.log(responseData)
      this.setState({
        photo: responseData[0].image
      })
      this.props.updateName(responseData[0].name)
    })
  }

  render() {
    return (
      <Image source={{  uri: this.state.photo }}/>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);

const Image = styled.Image`
width: 44px;
height: 44px;
border-radius: 22px;
`