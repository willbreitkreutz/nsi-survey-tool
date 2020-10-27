const SURVEY_TRAY_INITALIZE_START='SURVEY_TRAY_INITALIZE_START';
const SURVEY_TRAY_INITALIZE_END='SURVEY_TRAY_INITALIZE_END';
const SURVEY_TRAY_POINT_SUBMITTED='SURVEY_TRAY_POINT_SUBMITTED';
const SURVEY_TRAY_UPDATE_XY='SURVEY_TRAY_UPDATE_XY';
const SURVEY_TRAY_OCCUPANCY_TYPE_SELECTED='SURVEY_TRAY_OCCUPANCY_TYPE_SELECTED';
const MAP_INITIALIZED='MAP_INITIALIZED';

export default{
    name:'surveytraybundle',
    getReducer: () => {
      const initialData = {
        shouldInitialize: false,
        occupancyType: "",
        x: 0.0,
        y: 0.0,
        found_ht: 0.0,
        stories: 0,
        sq_ft: 0.0,
      };
      return (state = initialData, { type, payload }) => {
        switch(type){
          case SURVEY_TRAY_INITALIZE_START:
          case SURVEY_TRAY_INITALIZE_END:
          case SURVEY_TRAY_OCCUPANCY_TYPE_SELECTED:
            return Object.assign({}, state, payload);
          case MAP_INITIALIZED:
            return Object.assign({}, state, {
              shouldInitialize: true
            })
          default:
            return state;
        }
      }
    },
    doSurveyTrayInitialize: () => ({ dispatch, store, anonGet }) => {
      dispatch({
        type: SURVEY_TRAY_INITALIZE_START,
        payload: {
          shouldInitialize: false,
          occupancyType: "",
          x: 0.0,
          y: 0.0,
          found_ht: 0.0,
          stories: 0,
          sq_ft: 0.0,
        }
      })     
    },
    reactSurveyTrayShouldInitialize: (state) => {
      if(state.surveytraybundle.shouldInitialize) return { actionCreator: "doSurveyTrayInitialize" };
    },
    doSelectOccupancyType: (input) => ({dispatch, store}) =>{
        dispatch({
            type: SURVEY_TRAY_OCCUPANCY_TYPE_SELECTED,
            payload: {
              occupancyType: input,
            }
          }) 
    },
    selectOccupancyType: (state)=>{
      return state.surveytraybundle.occupancyType
    }
};