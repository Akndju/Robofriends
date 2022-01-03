import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import ErrorBoundary from "../Components/ErrorBoundary";
import Header from "../Components/Header";
import "./MainPage.css";

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    return this.props.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.props.searchField.toLowerCase());
    });
  };

  render() {
    const { onSearchChange, isPending } = this.props;

    if (isPending) {
      return <h1>Please Wait...</h1>;
    } else {
      return (
        <div className="tc">
          <Header />
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={this.filterRobots()} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default MainPage;
