import * as constants from "./constants";
import * as reducers from "./reducers";

describe("search robots", () => {
  const initialState = { searchField: "" };

  it("should return the initial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: "" });
  });

  it("should handle CHANGE_SEARCHFIELD", () => {
    expect(
      reducers.searchRobots(initialState, {
        type: constants.CHANGE_SEARCHFIELD,
        payload: "abc",
      })
    ).toEqual({
      searchField: "abc",
    });
  });
});

describe("request Robots", () => {
  const initialStateRobots = {
    isPending: false,
    robots: [],
    error: "",
  };

  it("should return the initial state", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it("should handle REQUEST_ROBOTS_PENDING action", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: constants.REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({ robots: [], isPending: true, error: "" });
  });

  it("should handle REQUEST_ROBOTS_SUCCESS action", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: constants.REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: 3,
            name: "test",
            email: "test@gmail.com",
          },
        ],
      })
    ).toEqual({
      robots: [
        {
          id: 3,
          name: "test",
          email: "test@gmail.com",
        },
      ],
      isPending: false,
      error: "",
    });
  });

  it("should handle REQUEST_ROBOTS_FAILED action", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: constants.REQUEST_ROBOTS_FAILED,
        payload: "Somethig went wrong",
      })
    ).toEqual({
      robots: [],
      isPending: false,
      error: "Somethig went wrong",
    });
  });
});
