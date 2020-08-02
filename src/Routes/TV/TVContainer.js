import React from "react";
import TVPresenter from "./TVPresenter";

export default class extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    error: null,
    loading: true,
  };

  render() {
    const { topRated, popular, airlingToday, error, loading } = this.state;
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airlingToday={airlingToday}
        error={error}
        loading={loading}
      />
    );
  }
}
