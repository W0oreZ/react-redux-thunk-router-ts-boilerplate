import React from "react";
import { DummyItem } from "./dummy.types";
import { connect } from "react-redux";
import { AppState } from "../../store/store";
import { itemsFetchData } from './dummy.actions'

export interface DummyProps {
  items: DummyItem[];
  isLoading: boolean;
  hasErrored: boolean;
  itemsFetchData?: Function;
}

class Dummy extends React.Component<DummyProps, {}> {

  componentDidMount(){
    console.log(`Loading mockup items list...`);
    this.props.itemsFetchData && this.props.itemsFetchData();
  }

  renderItems(items: DummyItem[]) {
    return items.map(item => <li key={item.id}>{item.label}</li>)
  }

  render() {
    const {items, isLoading, hasErrored } = this.props;
    if(hasErrored) {
      return <p style={{color:"red"}}>Sorry there was an Error !</p>
    }

    if(isLoading) {
      return <p style={{color:"gray"}}>Loading items...</p>
    }

    return (
      <ul>
        {this.renderItems(items)}
      </ul>
    );
  }
}

function mapStateToProps(state: AppState):DummyProps {
    return state.dummy;
}

export default connect(mapStateToProps,{ itemsFetchData })(Dummy);