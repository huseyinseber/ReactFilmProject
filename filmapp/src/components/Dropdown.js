import React from "react";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      times: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
  }

  render() {
    const { times } = this.state;
    return (
      <div className="col-lg-12 mb-3">
        <label htmlFor="exampleFormControlSelect1">Film puanını seçiniz</label>

        <form onSubmit={this.props.searchDropdownSubProp}>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            onChange={this.props.searchDropdownProp}
          >
            {times.map((rank) => {
              return (
                <option key={rank} value={rank}>
                  {" "}
                  {rank} - imdb puanı ve üzeri{" "}
                </option>
              );
            })}
          </select>
        </form>
      </div>
    );
  }
}
export default Dropdown;
