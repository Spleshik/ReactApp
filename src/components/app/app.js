import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../empoeeys-list/emploees-list";
import EmployeesAddForm from "../form-add/form-add";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Jonh C.", salary: 800, increase: false, rise: true, id: 1 },
        { name: "Rudy B.", salary: 1800, increase: false, rise: false, id: 2 },
        { name: "Steev S.", salary: 1000, increase: false, rise: false, id: 3 },
        { name: "Kevin M.", salary: 2800, increase: false, rise: false, id: 4 },
      ],
    };
  }
  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  onToggleIncrease = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const old = data[index];
      const newItem = { ...old, increase: !old.increase };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];

      return {
        data: newArr,
      };
    });
  };

  onToggleRise = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const old = data[index];
      const newItem = { ...old, rise: !old.rise };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];

      return {
        data: newArr,
      };
    });
  };

  render() {
    const emploees = this.state.data.lenght;
    const increased = this.state.data.filter((item) => item.increase).length;
    return (
      <div className="app">
        <AppInfo emploees={emploees} increased={increased} />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />
        <EmployeesAddForm />
      </div>
    );
  }
}

export default App;
