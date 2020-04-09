import { connect } from 'react-redux';
import Comments from './Comments';

const mapStateToProps = ({ postsReducer }) => postsReducer;

const CommentsConnect = connect(
  mapStateToProps,
  {}
)(Comments);

export default CommentsConnect;
