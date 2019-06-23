import { connect } from 'react-redux'
import { setVisiblityFilter } from '../actions'
//import Link from '../components/Link'
import { NavLink  } from "react-router-dom";
import React from "react";
// new implementation using react router;
const FilterLink =({filter,children})=>(
   
  <NavLink 
    to={filter=="all"?"":filter}
    activeStyle={{
      textDecoration:'none',
      color:'blue'
    }}  
    >
    {children}
  </NavLink>
)

export default FilterLink;


// const mapStateToLinkProps = (state, ownProps) => {    //ownProps---> props on container component
//   return {
//     active:
//       (ownProps.filter ==
//         state.visibilityFilter)
//   }
// }

// const mapDispatchToLinkProps = (dispatch, ownProps) => {
//   return {
//     onClick: () =>
//       dispatch(setVisiblityFilter(ownProps.filter))
//   }
// }


// export default connect(
//   mapStateToLinkProps,
//   mapDispatchToLinkProps)(Link)


// data and behaviour for the Link component is provided by the filter Link component

//JOB of container component-->To connect our presentational component with the store and provide all the data and behaviour
//needed.
// class FilterLink extends React.Component {
//   componentDidMount() {
//     this.unsubsribe = store.subscribe(() => {
//       this.forceUpdate()
//     })
//   }
//   componentWillUnmount() {
//     this.unsubsribe();
//   }

//   render() {
//     const props = this.props;
//     const state = store.getState()
//     return (
//       <Link
//         active={
//           props.filter ==
//           state.visibilityFilter
//         }
//         onClick={() =>
//           store.dispatch({
//             type: "SET_VISIBILTY_FILTER",
//             filter: props.filter
//           })
//         }
//       >
//         {props.children}
//       </Link>
//     )
//   }
// }


//export default FilterLink;