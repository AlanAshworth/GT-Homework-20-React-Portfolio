import axios from "axios";

export default {
  // Gets all champions
  getAssignments: function () {
    return axios.get("/api/assignments");
  },
  // Gets the champion with the given id
  getAssignment: function (id) {
    return axios.get("/api/assignments/" + id);
  },
  // Deletes the champion with the given id
  deleteAssignment: function (id) {
    return axios.delete("/api/assignments/" + id);
  },
  // Saves a champion to the database
  saveAssignment: function (assignmentData) {
    return axios.post("/api/assignments", assignmentData);
  },
};