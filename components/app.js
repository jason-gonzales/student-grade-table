class App {
  constructor(gradeTable,pageHeader) {
    // this.pageHeaader = pageHeaader;
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
    var sum = 0;


    for(var i = 0; i < grades.length; i++) {
     sum += grades[i].grade;

    }
    var average = sum/grades.length;
    this.pageHeader.updateAverage(average);
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
