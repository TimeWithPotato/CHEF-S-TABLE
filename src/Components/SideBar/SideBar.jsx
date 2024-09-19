import Table1 from "../Table1/Table1";
import PropTypes from 'prop-types'
const SideBar = ({ wantToCook }) => {

  return (
    <section>
          <div>
              <Table1 wantToCook={wantToCook}></Table1>
      </div>
    </section>
  );
};
SideBar.propTypes = {
    wantToCook:PropTypes.object
}
export default SideBar;
