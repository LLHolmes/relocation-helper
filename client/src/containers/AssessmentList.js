import React, { Component } from 'react';
import { connect } from 'react-redux';
import AssessmentHomeRow from '../components/AssessmentHomeRow.js';

class AssessmentList extends Component {

  render() {
    const { search, comps } = this.props

    const showSearchRow = <AssessmentHomeRow key={search.zpid} home={search} />

    const showCompRows = comps.map(home => {
      return <AssessmentHomeRow key={home.zpid} home={home} />
    });

    return (
      <div className="AssessmentList">
        <h3 className="TableTitle">Comparable Homes to {search.street}, {search.city}, {search.state} {search.zipcode} </h3>
        <table className="AssessmentTable">
          <tr className="AssessmentHeaderRow">
            <th>Address</th>
            <th>Sell Price</th>
            <th>Sell Date</th>
            <th>Assr. Value</th>
            <th>Assr. Year</th>
            <th>Built</th>
            <th>Bed/Bath</th>
            <th>Sq ft.</th>
            <th>Lot Size</th>
          </tr>
        { showSearchRow }
        { showCompRows }
        </table>
      </div>
    );
  };
};

const mapStateToProps = ({ search }) => {
  return {
    search: search.compSearch,
    comps: search.comps
  };
};

export default connect(mapStateToProps)(AssessmentList);
