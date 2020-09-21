class App {
  constructor(gradeTable) {
    this.gradeTable = gradeTable;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
  }

  getGrades() {
    $.ajax({
      url: "https://sgt.lfzprototypes.com/api/grades",
      method: "GET",
      data:"none",
      headers: {
        "X-Access-Token":"nsXceUhs"
      },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError

    })
  }

  start() {
    this.getGrades();
  }
}
