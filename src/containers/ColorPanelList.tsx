import ColorPanelList from '@/components/ColorPanelList/';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '@/store';
import * as Actions from '@/modules/ColorPanelList/actions';
import {
  ColorPanelType,
  ActionTypes,
  DataType,
} from '@/modules/ColorPanelList/types';

const mapStateToProps = (state: AppState) => {
  return {
    items: state.ColorPanelList.items,
    user: state.User.data,
  };
};

export type MapDispatchTypes = {
  add: (data: ColorPanelType) => void;
  remove: (id: number) => void;
  // fetch: () => void;
};

/**
 * Dispatch
 */
const mapDispatchToProps = (
  dispatch: Dispatch<ActionTypes>
): MapDispatchTypes => {
  return {
    add: data => dispatch(Actions.addColorPanel(data)),
    remove: id => dispatch(Actions.removeColorPanel(id)),
    // @ts-ignore
    // fetch: () => dispatch(Actions.fetchLuckyColorDataWithPromise()),
  };
};

/**
 * Connect
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorPanelList);
